import { render, screen } from "@testing-library/react-native";
import { MealList } from "../MealList";
import { MEALS } from "../../../../data/dummy-data";

const mockValues = {
  items: {
    ...MEALS,
  },
};

describe("components/MealsList/meal-list/<MealList />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component properly", () => {
    render(<MealList {...mockValues} />);

    expect(
      screen.getByTestId("components.MealsList.meal-list.view"),
    ).toBeTruthy();
  });
});
