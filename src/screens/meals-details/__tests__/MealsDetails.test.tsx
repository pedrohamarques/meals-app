import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../../utils/test-utils";
import { MealsDetailsScreen } from "../MealsDetails";
import { DUMMY_DATA } from "./fixture";

const mockSelectedMeal = DUMMY_DATA[0];

const mockOnPress = jest.fn();

jest.mock("../MealsDetails.hook", () => ({
  useMealsDetails: () => ({
    navigation: {
      setOptions: () => jest.fn(),
    },
    isMealFavorite: false,
    changeFavoriteStatusHandler: mockOnPress,
    selectedMeal: mockSelectedMeal,
  }),
}));

describe("screens/meals-details/MealsDetails/<MealsDetailsScreen />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly", () => {
    renderWithProviders(<MealsDetailsScreen />);

    expect(
      screen.getByTestId("screens.meals-details.MealsDetails.image"),
    ).toBeTruthy();
    expect(screen.getByText("Spaghetti with Tomato Sauce")).toBeTruthy();

    expect(
      screen.getByTestId("components.meals-details.meals-details-screen"),
    ).toBeTruthy();

    expect(screen.getByText("Ingredients")).toBeTruthy();

    expect(
      screen.getByTestId("components.meal-detail.ingredients-1"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("components.meal-detail.ingredients-2"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("components.meal-detail.ingredients-3"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("components.meal-detail.ingredients-4"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("components.meal-detail.ingredients-5"),
    ).toBeTruthy();

    expect(screen.getByText("Steps")).toBeTruthy();

    expect(screen.getByTestId("components.meal-detail.steps-1")).toBeTruthy();
    expect(screen.getByTestId("components.meal-detail.steps-2")).toBeTruthy();
    expect(screen.getByTestId("components.meal-detail.steps-3")).toBeTruthy();
    expect(screen.getByTestId("components.meal-detail.steps-4")).toBeTruthy();
    expect(screen.getByTestId("components.meal-detail.steps-5")).toBeTruthy();
    expect(screen.getByTestId("components.meal-detail.steps-6")).toBeTruthy();
  });
});
