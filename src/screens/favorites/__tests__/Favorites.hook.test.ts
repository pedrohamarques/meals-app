import { renderHook } from "@testing-library/react-native";

import { useFavoritesScreen } from "../Favorites.hook";

import { DUMMY_DATA } from "./fixture";

const mockAppState = {
  favorites: {
    ids: ["m1"],
  },
};

const mockUseSelector = jest.fn();

jest.mock("react-redux", () => ({
  //@ts-ignore
  useSelector: (callback) => mockUseSelector(callback),
}));

describe("screens/favorites/useFavoritesScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns favorite meals when ids are provided", () => {
    mockUseSelector.mockImplementation((callback) => callback(mockAppState));
    const { result } = renderHook(() => useFavoritesScreen());

    expect(mockUseSelector).toHaveBeenCalledTimes(1);

    expect(result.current.favoriteMeals).toEqual(DUMMY_DATA);
  });
});
