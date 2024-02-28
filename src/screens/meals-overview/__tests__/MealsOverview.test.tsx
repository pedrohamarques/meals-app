import { render, screen } from "@testing-library/react-native";
import { MealsOverviewScreen } from "../MealsOverview";

jest.mock("../MealsOverview.hook", () => ({
  useMealsOverviewScreen: () => ({
    displayedMeals: [],
    navigation: {
      setOptions: () => jest.fn(),
    },
    categoryId: "4",
  }),
}));

describe("screens/meals-overview/MealsOverview/<MealsOverview />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly", () => {
    render(<MealsOverviewScreen />);

    expect(
      screen.getByTestId("components.MealsList.meal-list.view"),
    ).toBeTruthy();
  });
});
