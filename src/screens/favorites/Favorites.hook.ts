import { MEALS } from "../../data/dummy-data";
import { useAppSelector } from "../../hooks/redux";
import { selectMealsIds } from "../../store/redux/slices/favorites";

export function useFavoritesScreen() {
  const favoriteMealsIds = useAppSelector(selectMealsIds);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id),
  );

  return {
    favoriteMeals,
  };
}
