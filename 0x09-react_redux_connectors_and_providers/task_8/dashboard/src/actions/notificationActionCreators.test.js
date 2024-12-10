import * as actionCreators from "./notificationActionCreators";

describe("notificationActionCreators tests", () => {
  it("markAsRead should return a MARK_AS_READ action", () => {
    const action = actionCreators.markAsRead(1);
    expect(action).toEqual({ type: "MARK_AS_READ", index: 1 });
  });

  it("setNotificationFilter should return a SET_TYPE_FILTER action", () => {
    const action = actionCreators.setNotificationFilter("DEFAULT");
    expect(action).toEqual({ type: "SET_TYPE_FILTER", filter: "DEFAULT" });
  });
});