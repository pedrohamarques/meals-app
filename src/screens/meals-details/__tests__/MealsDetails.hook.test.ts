import { act, renderHook } from "@testing-library/react-native";
import { useMealsDetailsScreen } from "../MealsDetails.hook";
import { dummyMeal } from "./dummy";

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

    expect(result.current.selectedMeal).toEqual(dummyMeal);
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
