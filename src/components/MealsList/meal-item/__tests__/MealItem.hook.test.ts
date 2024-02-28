import { act, renderHook } from "@testing-library/react-native";
import { useMealItem } from "../MealItem.hook";

const mockHookParams = {
  id: "5",
};

const mockNavigation = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigation,
  }),
}));

describe("components/MealsList/meal-item/useMealItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("navigates to MealDetails screen when itemPressHandler is called", () => {
    const { result } = renderHook(() => useMealItem(mockHookParams));

    act(() => {
      result.current.itemPressHandler();
    });

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("MealDetails", { mealId: "5" });
  });
});
