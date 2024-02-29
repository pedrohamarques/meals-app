import { render, screen } from "@testing-library/react-native";
import { MealsDetailsScreen } from "../MealsDetails";
import { dummyMeal } from "./dummy";

const mockChangeFavoriteStatusHandler = jest.fn();

const mockHookValues = {
  isMealFavorite: true,
  navigation: {
    setOptions: () => jest.fn(),
  },
  selectedMeal: dummyMeal,
  changeFavoriteStatusHandler: mockChangeFavoriteStatusHandler,
};

jest.mock("../MealsDetails.hook", () => ({
  useMealsDetailsScreen: () => mockHookValues,
}));

describe("screens/meals-details/MealsDetails/<MealsDetails />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly", () => {
    render(<MealsDetailsScreen />);

    expect(
      screen.getByTestId("screens.meals-details.MealsDetails.image"),
    ).toBeTruthy();
    expect(screen.getByText("Spaghetti with Tomato Sauce")).toBeTruthy();

    expect(
      screen.getByTestId("screens.meals-details.MealsDetails.listsContainer"),
    ).toBeTruthy();
    expect(screen.getByText("Ingredients")).toBeTruthy();
    expect(screen.getByText("Steps")).toBeTruthy();
  });
});
