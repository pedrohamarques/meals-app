import { renderHook } from "@testing-library/react-native";

import { useFavoritesScreen } from "../Favorites.hook";

const mockAppState = {
  favorites: {
    ids: ["m1", "m2"],
  },
};

const mockUseSelector = jest.fn();

jest.mock("../../../hooks/redux", () => ({
  useAppSelector: () => mockUseSelector(),
}));

describe("screens/favorites/useFavoritesScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns favorite meals when ids are provided", () => {
    mockUseSelector.mockImplementation((callback) => callback(mockAppState));
  });

  const { result } = renderHook(() => useFavoritesScreen());

  expect(mockUseSelector).toHaveBeenCalledTimes(1);

  expect(result.current.favoriteMeals).toEqual([]);
});
