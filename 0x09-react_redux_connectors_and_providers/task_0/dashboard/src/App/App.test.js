import { mapStateToProps } from "./App";
import { fromJS } from "immutable";

describe("mapStateToProps", () => {
  it("should return the right object", () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});