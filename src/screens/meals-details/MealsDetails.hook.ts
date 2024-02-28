import { useContext } from "react";
import { FavoritesContext } from "../../store/context/favorites-context";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { MEALS } from "../../data/dummy-data";

export function useMealsDetailsScreen() {
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const route = useRoute<RouteProp<RootStackParamList, "MealDetails">>();

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFavorite = ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (isMealFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  }
  return {
    isMealFavorite,
    selectedMeal,
    changeFavoriteStatusHandler,
    navigation,
  };
}
