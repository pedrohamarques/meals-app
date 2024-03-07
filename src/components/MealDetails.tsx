import { StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";
import Meal from "../models/meal";

type MealProps = Pick<Meal, "duration" | "complexity" | "affordability">;

type MealDetailsProps = MealProps & {
  style?: ViewProps;
  textStyle?: TextStyle;
  testID?: string;
};

export function MealDetails({
  affordability,
  duration,
  complexity,
  style,
  textStyle,
  testID,
}: MealDetailsProps) {
  return (
    <View
      style={[styles.detailsContainer, style]}
      testID={`components.meals-details.${testID}`}
    >
      <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
