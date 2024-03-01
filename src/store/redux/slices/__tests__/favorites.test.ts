import reducer, { addFavorite, removeFavorite } from "../favorites";

describe("favoritesSlice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({ ids: [] });
  });

  it("adds an id to the list of favorites ids", () => {
    const previousState = {
      ids: ["m1"],
    };
    expect(reducer(previousState, addFavorite("m2"))).toEqual({
      ids: ["m1", "m2"],
    });
  });

  it("removes an id from the list of favorites ids", () => {
    const previousState = {
      ids: ["m1", "m2"],
    };
    expect(reducer(previousState, removeFavorite("m1"))).toEqual({
      ids: ["m2"],
    });
  });
});
