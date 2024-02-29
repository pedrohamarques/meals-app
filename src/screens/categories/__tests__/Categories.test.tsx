import { render, screen } from "@testing-library/react-native";
import { CategoriesScreen } from "../Categories";

jest.mock("../Categories.hook", () => ({
  useCategoriesScreen: () => ({
    onPressHandler: jest.fn(),
  }),
}));

describe("screens/categories/Categories/<Categories />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders screen properly", () => {
    render(<CategoriesScreen />);

    expect(
      screen.getByTestId("screens.categories.Categories.flatlist"),
    ).toBeTruthy();
  });
});
