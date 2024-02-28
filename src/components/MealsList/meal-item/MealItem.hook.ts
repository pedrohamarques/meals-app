import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";

type useMealItemProps = {
  id: string;
};

export function useMealItem({ id }: useMealItemProps) {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealDetails">>();

  function itemPressHandler() {
    navigation.navigate("MealDetails", { mealId: id });
  }
  return {
    itemPressHandler,
  };
}
