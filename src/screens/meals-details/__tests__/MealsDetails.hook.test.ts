import { act, renderHook } from "@testing-library/react-native";
import { useMealsDetailsScreen } from "../MealsDetails.hook";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: {
      mealId: "m1",
    },
  }),
  useNavigation: () => jest.fn(),
}));

const mockAddFavorite = jest.fn();
const mockRemoveFavorite = jest.fn();

const mockContextValues = {
  ids: ["m1", "m2"],
  addFavorite: mockAddFavorite,
  removeFavorite: mockRemoveFavorite,
};

const mockUseContext = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => mockUseContext(),
}));

describe("screens/meals-details/MealsDetails/useMealsDetailsScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseContext.mockReturnValue(mockContextValues);
  });

  it("returns selectedMeal when mealId is passed", () => {
    const { result } = renderHook(() => useMealsDetailsScreen());

    expect(result.current.selectedMeal).toEqual({
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
    });
  });

  it("returns true when the meal is already on favorites", () => {
    const { result } = renderHook(() => useMealsDetailsScreen());

    expect(result.current.isMealFavorite).toBe(true);
  });

  it("calls removeFavorite function when changeFavoriteStatusHandler is called and the meal is already on favorites", () => {
    const { result } = renderHook(() => useMealsDetailsScreen());

    act(() => {
      result.current.changeFavoriteStatusHandler();
    });

    expect(mockContextValues.removeFavorite).toHaveBeenCalledTimes(1);
    expect(mockContextValues.addFavorite).not.toHaveBeenCalled();
  });

  it("returns false when the meal is not on favorites", () => {
    mockUseContext.mockReturnValueOnce({
      ...mockContextValues,
      ids: ["m2, m3"],
    });
    const { result } = renderHook(() => useMealsDetailsScreen());

    expect(result.current.isMealFavorite).toBe(false);
  });

  it("calls addFavorite function when changeFavoriteStatusHandler is called and the meal is not on favorites", () => {
    mockUseContext.mockReturnValueOnce({
      ...mockContextValues,
      ids: ["m2, m3"],
    });

    const { result } = renderHook(() => useMealsDetailsScreen());

    act(() => {
      result.current.changeFavoriteStatusHandler();
    });

    expect(mockContextValues.addFavorite).toHaveBeenCalledTimes(1);
    expect(mockContextValues.removeFavorite).not.toHaveBeenCalled();
  });
});
