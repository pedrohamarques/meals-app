import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import type { NavigationProp, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../../App";

import { MEALS } from "../../data/dummy-data";
import {
  addFavorite,
  removeFavorite,
  selectMealsIds,
} from "../../store/redux/slices/favorites";

export function useMealsDetails() {
  const favoriteMealsIds = useAppSelector(selectMealsIds);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const route = useRoute<RouteProp<RootStackParamList, "MealDetails">>();

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFavorite = favoriteMealsIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (isMealFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  }

  return {
    selectedMeal,
    navigation,
    changeFavoriteStatusHandler,
    isMealFavorite,
  };
}
