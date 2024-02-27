import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { MealItem } from "../components/MealItem";
import Meal from "../models/meal";

import type { MealItemProps } from "../components/MealItem";
import type { RootStackParamList } from "../../App";
import type { RouteProp } from "@react-navigation/native";

export function MealsOverviewScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealsCategories">>();

  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;
    console.log(categoryTitle);

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  function renderMealItem({
    title,
    imageUrl,
    affordability,
    complexity,
    duration,
  }: MealItemProps) {
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
