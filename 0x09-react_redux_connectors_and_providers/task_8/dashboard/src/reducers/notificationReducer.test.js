import notificationReducer, { initialState } from "./notificationReducer";
import * as actionCreators from "../actions/notificationActionCreators";
import { notificationsNormalizer } from "../schema/notifications";

describe("notificationReducer tests", () => {
  it("should return an empty array from default state", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it("should return data passed with FETCH_NOTIFICATIONS_SUCCESS action", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ];
    const expectedData = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    ];
    const action = actionCreators.fetchNotificationsSuccess(data);
    expect(notificationReducer(undefined, action).toJS().notifications).toEqual(
      notificationsNormalizer(expectedData)
    );
  });

  it("should update the right data with MARK_AS_READ action", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    ];
    const expectedData = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: true,
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    ];
    const action = actionCreators.fetchNotificationsSuccess(data);
    const state = notificationReducer(undefined, action);
    const markAsReadAction = actionCreators.markAsRead(2);
    expect(
      notificationReducer(state, markAsReadAction).toJS().notifications
    ).toEqual(notificationsNormalizer(expectedData));
  });

  it("should update the filter with SET_TYPE_FILTER action", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    ];
    const action = actionCreators.fetchNotificationsSuccess(data);
    const state = notificationReducer(undefined, action);
    const setNotificationFilterAction =
      actionCreators.setNotificationFilter("URGENT");
    expect(
      notificationReducer(state, setNotificationFilterAction).toJS().filter
    ).toBe("URGENT");
  });
});