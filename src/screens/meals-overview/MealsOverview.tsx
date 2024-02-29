import { useLayoutEffect } from "react";

import { CATEGORIES } from "../../data/dummy-data";
import { MealList } from "../../components/MealsList/meal-list/MealList";

import { useMealsOverviewScreen } from "./MealsOverview.hook";

export function MealsOverviewScreen() {
  const { displayedMeals, navigation, categoryId } = useMealsOverviewScreen();

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
}
