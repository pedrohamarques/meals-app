import { StyleSheet, Text, View } from "react-native";

import { useFavoritesScreen } from "./Favorites.hook";

import { MealList } from "../../components/MealsList/MealList";

export function FavoritesScreen() {
  const { favoriteMeals } = useFavoritesScreen();

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <MealList items={favoriteMeals} testID="screens.favorites.Favorites" />
  );
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
