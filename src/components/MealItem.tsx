import { Text, View } from "react-native";
import Meal from "../models/meal";

type MealItem = Pick<Meal, 'title'>

export function MealItem({ title }: MealItem) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}
