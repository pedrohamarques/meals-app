import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { renderItemProps } from "./Categories";

export function useCategoriesScreen() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealsCategories">>();

  function onPressHandler(item: renderItemProps) {
    navigation.navigate("MealsOverview", { categoryId: item.id });
  }

  return { onPressHandler };
}
