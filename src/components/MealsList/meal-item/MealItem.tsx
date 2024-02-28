import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import type Meal from "../../../models/meal";

import { MealDetails } from "../../MealDetails";
import { useMealItem } from "./MealItem.hook";

export type MealItemProps = Pick<
  Meal,
  "title" | "imageUrl" | "duration" | "affordability" | "complexity" | "id"
>;

export function MealItem({
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  id,
}: MealItemProps) {
  const { itemPressHandler } = useMealItem({ id });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={itemPressHandler}
        testID="components.meals-list.meal-item.MealItem.pressable"
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <MealDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
