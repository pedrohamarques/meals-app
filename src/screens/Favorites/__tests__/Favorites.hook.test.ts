import { renderHook } from "@testing-library/react-native";
import { useFavoritesScreen } from "../Favorites.hook";
import { dummyFavoritesMeals } from "./dummy";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    ids: ["m1", "m2"],
  }),
}));

describe("screens/Favorites/useFavoritesScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns the favorite meals when ids are provided", () => {
    const { result } = renderHook(() => useFavoritesScreen());

    expect(result.current.favoriteMeals).toEqual(dummyFavoritesMeals);
  });
});
