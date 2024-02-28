import { renderHook } from "@testing-library/react-native";
import { useMealsOverviewScreen } from "../MealsOverview.hook";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: {
      categoryId: "c1",
    },
  }),
  useNavigation: () => jest.fn(),
}));

describe("screens/meals-overview/useMealsOverview", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns its values properly when given a categoryId", () => {
    const { result } = renderHook(() => useMealsOverviewScreen());

    expect(result.current.categoryId).toBe("c1");
    expect(result.current.displayedMeals).toEqual([
      {
        id: "m1",
        categoryIds: ["c1", "c2"],
        title: "Spaghetti with Tomato Sauce",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
        ingredients: [
          "4 Tomatoes",
          "1 Tablespoon of Olive Oil",
          "1 Onion",
          "250g Spaghetti",
          "Spices",
          "Cheese (optional)",
        ],
        steps: [
          "Cut the tomatoes and the onion into small pieces.",
          "Boil some water - add salt to it once it boils.",
          "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
          "In the meantime, heaten up some olive oil and add the cut onion.",
          "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
          "The sauce will be done once the spaghetti are.",
          "Feel free to add some cheese on top of the finished dish.",
        ],
        duration: 20,
        complexity: "simple",
        affordability: "affordable",
        isGlutenFree: false,
        isVegan: true,
        isVegetarian: true,
        isLactoseFree: true,
      },
    ]);
  });
});
