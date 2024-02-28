import { fireEvent, render, screen } from "@testing-library/react-native";
import { MealItem } from "../MealItem";

const mockValues = {
  title: "Some Title",
  imageUrl: "someUrl",
  duration: 10,
  affordability: "Affordable",
  complexity: "Easy",
  id: "3",
};

const mockHookValues = {
  itemPressHandler: jest.fn(),
};

jest.mock("../MealItem.hook", () => ({
  useMealItem: () => mockHookValues,
}));

describe("components/MealsList/meal-item/MealItem/<MealItem />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders screen properly", () => {
    render(<MealItem {...mockValues} />);

    expect(
      screen.getByTestId("components.meals-list.meal-item.MealItem.pressable"),
    ).toBeTruthy();
    expect(screen.getByText("Some Title")).toBeTruthy();
  });

  it("calls itemPressHandler when the item is pressed", () => {
    render(<MealItem {...mockValues} />);

    fireEvent.press(
      screen.getByTestId("components.meals-list.meal-item.MealItem.pressable"),
    );

    expect(mockHookValues.itemPressHandler).toHaveBeenCalledTimes(1);
  });
});
