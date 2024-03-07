import { act, renderHook } from "@testing-library/react-native";

import { useMealsDetails } from "../MealsDetails.hook";
import { DUMMY_DATA } from "./fixture";

const mockAppState = {
  favorites: {
    ids: ["m1"],
  },
};

const mockRouteParams = {
  params: {
    mealId: "m1",
  },
};

const mockUseSelector = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: (callback: Function) => mockUseSelector(callback),
  useDispatch: () => () => mockDispatch(),
}));

const mockUseRoute = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => jest.fn(),
  useRoute: () => mockUseRoute(),
}));

describe("screens/meals-details/useMealsDetails", () => {
  beforeAll(() => {
    mockUseRoute.mockReturnValue(mockRouteParams);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelector.mockImplementation((callback) => callback(mockAppState));
  });
  it("returns isMealFavorite true when it is marked as favorite", () => {
    const { result } = renderHook(() => useMealsDetails());

    expect(result.current.isMealFavorite).toBe(true);
  });

  it("returns isMealFavorite false when it is not marked as favorite", () => {
    const mockEmptyAppState = {
      favorites: {
        ids: [],
      },
    };
    mockUseSelector.mockImplementationOnce((callback) =>
      callback(mockEmptyAppState),
    );

    const { result } = renderHook(() => useMealsDetails());

    expect(result.current.isMealFavorite).toBe(false);
  });

  it("returns the selectedMeal when the hook is called", () => {
    const { result } = renderHook(() => useMealsDetails());

    expect(result.current.selectedMeal).toEqual(DUMMY_DATA[0]);
  });

  it("dispatches removeFavorite action when the meal is favorited and changeFavoriteStatusHandler is called", () => {
    const { result, rerender } = renderHook(() => useMealsDetails());

    expect(result.current.isMealFavorite).toBe(true);

    act(() => result.current.changeFavoriteStatusHandler());

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    rerender(1);

    () => expect(result.current.isMealFavorite).toBe(false);
  });

  it("dispatches addFavorite action when the meal is not favorited and changeFavoriteStatusHandler is called", () => {
    const mockEmptyAppState = {
      favorites: {
        ids: [],
      },
    };
    mockUseSelector.mockImplementationOnce((callback) =>
      callback(mockEmptyAppState),
    );

    const { result, rerender } = renderHook(() => useMealsDetails());

    expect(result.current.isMealFavorite).toBe(false);

    act(() => result.current.changeFavoriteStatusHandler());

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    rerender(1);

    expect(result.current.isMealFavorite).toBe(true);
  });
});
