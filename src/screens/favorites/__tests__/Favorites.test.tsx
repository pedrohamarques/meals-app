import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../../utils/test-utils";
import { FavoritesScreen } from "../Favorites";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("screens/favorites/Favorites/<FavoritesScreen />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly when there is no favorites meals", () => {
    renderWithProviders(<FavoritesScreen />);

    expect(screen.getByText("You have no favorite meals yet.")).toBeTruthy();
    expect(
      screen.queryByTestId("screens.favorites.Favorites.mealsList.view"),
    ).toBeNull();
  });

  it("renders screen properly when there are favorite meals", () => {
    renderWithProviders(<FavoritesScreen />, {
      preloadedState: {
        favorites: {
          ids: ["m1"],
        },
      },
    });

    expect(screen.queryByText("You have no favorite meals yet")).toBeNull();
    expect(
      screen.getByTestId("screens.favorites.Favorites.mealsList.view"),
    ).toBeTruthy();
  });
});
