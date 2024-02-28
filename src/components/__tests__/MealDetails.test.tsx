import { screen, render } from "@testing-library/react-native";
import { MealDetails } from "../MealDetails";

const mockValues = {
  affordability: "Affordable",
  duration: 10,
  complexity: "Easy",
};

describe("components/MealDetails/<MealDetails />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component properly", () => {
    render(<MealDetails {...mockValues} />);

    expect(screen.getByText("10 min")).toBeTruthy();
    expect(screen.getByText("AFFORDABLE")).toBeTruthy();
    expect(screen.getByText("EASY")).toBeTruthy();
  });
});
