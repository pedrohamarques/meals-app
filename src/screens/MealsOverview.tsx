import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

import { MealItem } from "../components/MealItem";
import Meal from "../models/meal";

import type { MealItemProps } from "../components/MealItem";
import type { RootStackParamList } from "../../App";
import type { RouteProp } from "@react-navigation/native";

export function MealsOverviewScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();

  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

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
