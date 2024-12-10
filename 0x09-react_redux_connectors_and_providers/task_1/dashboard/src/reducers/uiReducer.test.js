import uiReducer, { initialState } from "./uiReducer";

describe("uiReducer tests", () => {
  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when unknown action is passed", () => {
    expect(uiReducer(undefined, { type: "SELECT_COURSE" }).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it('should properly update the state when "DISPLAY_NOTIFICATION_DRAWER" action is passed', () => {
    expect(
      uiReducer(undefined, { type: "DISPLAY_NOTIFICATION_DRAWER" }).toJS()
        .isNotificationDrawerVisible
    ).toEqual(true);
  });
});