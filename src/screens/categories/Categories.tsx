import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import { CategoryGridTile } from "../../components/CategoryGridTile";

import type { ColorValue } from "react-native";

import { useCategoriesScreen } from "./Categories.hook";

export type renderItemProps = {
  title: string;
  color: ColorValue;
  id: string;
};

export function CategoriesScreen() {
  const { onPressHandler } = useCategoriesScreen();
  function renderCategoryItem(item: renderItemProps) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => onPressHandler(item)}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
      testID="screens.categories.Categories.flatlist"
    />
  );
}
