import { screen, fireEvent, render } from "@testing-library/react-native";
import { CategoryGridTile } from "../CategoryGridTile";

const mockValues = {
  onPress: jest.fn(),
  title: "Some title",
  color: "blue",
};
describe("components/CategoryGridTile/<CategoryGridTile />", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it("renders component properly", () => {
    render(<CategoryGridTile {...mockValues} />);

    expect(
      screen.getByTestId("components.CategoryGridTile.pressable"),
    ).toBeTruthy();
    expect(screen.getByText("Some title")).toBeTruthy();
  });

  it("calls onPress when component is pressed", () => {
    render(<CategoryGridTile {...mockValues} />);

    fireEvent.press(
      screen.getByTestId("components.CategoryGridTile.pressable"),
    );

    expect(mockValues.onPress).toHaveBeenCalledTimes(1);
  });
});
