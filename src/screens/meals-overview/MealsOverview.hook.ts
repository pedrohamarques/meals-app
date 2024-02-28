import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { MEALS } from "../../data/dummy-data";

export function useMealsOverviewScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealsCategories">>();

  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  return {
    displayedMeals,
    navigation,
    categoryId,
  };
}
