import { render, screen } from "@testing-library/react-native";
import { FavoritesScreen } from "../Favorites";
import { dummyFavoritesMeals } from "./dummy";

const mockUseFavoritesScreen = jest.fn();

jest.mock("../Favorites.hook", () => ({
  useFavoritesScreen: () => mockUseFavoritesScreen(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("screens/Favorites/Favorites/<Favorites />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly when there are no favorite meals", () => {
    mockUseFavoritesScreen.mockReturnValue({
      favoriteMeals: [],
    });
    render(<FavoritesScreen />);

    expect(screen.getByText("You have no favorite meals yet.")).toBeTruthy();
  });

  it("renders screen properly when there are favorite meals", () => {
    mockUseFavoritesScreen.mockReturnValue({
      favoriteMeals: dummyFavoritesMeals,
    });

    render(<FavoritesScreen />);

    expect(screen.queryByText("You have no favorite meals yet.")).toBeNull();
  });
});
