import { useLayoutEffect } from "react";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealList } from "../components/MealsList/MealList";

import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../App";

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

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
}
