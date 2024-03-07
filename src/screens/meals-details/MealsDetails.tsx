import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MealDetails } from "../../components/MealDetails";
import { Subtitle } from "../../components/MealDetail/Subtitle";
import { List } from "../../components/MealDetail/List";
import { IconButton } from "../../components/IconButton";

import { useMealsDetails } from "./MealsDetails.hook";

export function MealsDetailsScreen() {
  const {
    changeFavoriteStatusHandler,
    isMealFavorite,
    navigation,
    selectedMeal,
  } = useMealsDetails();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? "star" : "star-outline"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal?.imageUrl }}
        testID="screens.meals-details.MealsDetails.image"
      />
      <Text style={styles.title}>{selectedMeal?.title}</Text>

      <MealDetails
        duration={selectedMeal!.duration}
        complexity={selectedMeal!.complexity}
        affordability={selectedMeal!.affordability}
        textStyle={styles.detailText}
        testID="meals-details-screen"
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal!.ingredients} testId="ingredients" />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal!.steps} testId="steps" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
