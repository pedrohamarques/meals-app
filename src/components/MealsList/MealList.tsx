import { FlatList, StyleSheet, View } from "react-native";
import { MealItem, MealItemProps } from "./MealItem";
import Meal from "../../models/meal";

type MealListProps = {
  items: Meal[];
  testID?: string;
};

export function MealList({ items, testID }: MealListProps) {
  function renderMealItem({
    title,
    imageUrl,
    affordability,
    complexity,
    duration,
    id,
  }: MealItemProps) {
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        id={id}
      />
    );
  }

  return (
    <View style={styles.container} testID={`${testID}.mealsList.view`}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
