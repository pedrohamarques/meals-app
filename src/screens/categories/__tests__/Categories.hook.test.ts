import { act, renderHook } from "@testing-library/react-native";
import { useCategoriesScreen } from "../Categories.hook";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const mockValues = {
  title: "Some Title",
  id: "m1",
  color: "blue",
};

describe("screens/categories/Categories/useCategoriesScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls navigate function when onPressHandler is called", () => {
    const { result } = renderHook(() => useCategoriesScreen());

    act(() => result.current.onPressHandler(mockValues));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("MealsOverview", {
      categoryId: "m1",
    });
  });
});
