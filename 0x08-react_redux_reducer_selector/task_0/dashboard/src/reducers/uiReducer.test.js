import uiReducer, { initialState } from "./uiReducer";

describe("uiReducer tests", () => {
  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state when unknown action is passed", () => {
    expect(uiReducer(undefined, { type: "SELECT_COURSE" })).toEqual(
      initialState
    );
  });

  it('should properly update the state when "DISPLAY_NOTIFICATION_DRAWER" action is passed', () => {
    expect(
      uiReducer(undefined, { type: "DISPLAY_NOTIFICATION_DRAWER" })
    ).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});