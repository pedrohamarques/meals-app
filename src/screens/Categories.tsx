import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

import type { ColorValue } from "react-native";

type renderItemProps = {
  item: {
    title: string;
    color: ColorValue;
  };
};

function renderCategoryItem({ item }: renderItemProps) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
