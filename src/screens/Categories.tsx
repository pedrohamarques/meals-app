import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

import type { ColorValue } from "react-native";
import { RootStackParamList } from "../../App";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type renderItemProps = {
  item: {
    title: string;
    color: ColorValue;
    id: string;
  };
};

export function CategoriesScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'MealsCategories'>>();

  function renderCategoryItem({ item }: renderItemProps) {
    function onPressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id })
    }

    return <CategoryGridTile title={item.title} color={item.color} onPress={onPressHandler} />;
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
