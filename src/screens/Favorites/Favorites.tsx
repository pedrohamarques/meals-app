import { StyleSheet, Text, View } from "react-native";

import { MealList } from "../../components/MealsList/meal-list/MealList";

import { useFavoritesScreen } from "./Favorites.hook";

export function FavoritesScreen() {
  const { favoriteMeals } = useFavoritesScreen();

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
