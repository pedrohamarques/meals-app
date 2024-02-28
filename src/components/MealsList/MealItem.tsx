import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import type Meal from "../../models/meal";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { MealDetails } from "../MealDetails";

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
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealDetails">>();

  function itemPressHandle() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={itemPressHandle}
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
