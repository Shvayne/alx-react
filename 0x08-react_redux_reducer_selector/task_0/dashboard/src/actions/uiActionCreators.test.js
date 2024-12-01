import * as actionCreators from "./uiActionCreators";

describe("uiActionCreators tests", () => {
  it("login function should return a LOGIN action", () => {
    const action = actionCreators.login("test@test.com", "pass");
    expect(action).toEqual({
      type: "LOGIN",
      user: { email: "test@test.com", password: "pass" },
    });
  });

  it("logout function should return a LOGOUT action", () => {
    const action = actionCreators.logout();
    expect(action).toEqual({ type: "LOGOUT" });
  });

  it("displayNotificationDrawer function should return a DISPLAY_NOTIFICATION_DRAWER action", () => {
    const action = actionCreators.displayNotificationDrawer();
    expect(action).toEqual({ type: "DISPLAY_NOTIFICATION_DRAWER" });
  });

  it("hideNotificationDrawer function should return a HIDE_NOTIFICATION_DRAWER action", () => {
    const action = actionCreators.hideNotificationDrawer();
    expect(action).toEqual({ type: "HIDE_NOTIFICATION_DRAWER" });
  });
});