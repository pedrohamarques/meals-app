import { useContext } from "react";
import { FavoritesContext } from "../../store/context/favorites-context";
import { MEALS } from "../../data/dummy-data";

export function useFavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return {
    favoriteMeals,
  };
}
