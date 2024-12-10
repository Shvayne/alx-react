import { mapStateToProps } from "./App";
import { fromJS } from "immutable";

describe("mapStateToProps", () => {
  it("should return the right object for isLoggedIn", () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });

  it("should return the right object for displayDrawer", () => {
    const state = fromJS({
      isNotificationDrawerVisible: true,
    });
    expect(mapStateToProps(state)).toEqual({ displayDrawer: true });
  });
});