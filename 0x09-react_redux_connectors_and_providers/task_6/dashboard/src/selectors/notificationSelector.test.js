import notificationReducer from "../reducers/notificationReducer";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "../selectors/notificationSelector";
import * as actionCreators from "../actions/notificationActionCreators";

describe("notificationSelector", () => {
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
  const action = actionCreators.fetchNotificationsSuccess(data);
  const state = notificationReducer(undefined, action);

  describe("filterTypeSelected", () => {
    it("should return the filter type selected", () => {
      const result = filterTypeSelected(state);
      expect(result).toBe("DEFAULT");
    });
  });

  describe("getNotifications", () => {
    it("should return the notifications entities", () => {
      const result = getNotifications(state);
      //   expect(result["1"]).toEqual({
      //     ...data[0],
      //     isRead: false,
      //   });
      //   expect(result["2"]).toEqual({
      //     ...data[1],
      //     isRead: false,
      //   });
      //   expect(result["3"]).toEqual({
      //     ...data[2],
      //     isRead: false,
      //   });
      for (let i = 1; i <= 3; i++) {
        expect(result[i.toString()]).toEqual({
          ...data[i - 1],
          isRead: false,
        });
      }
    });
  });

  describe("getUnreadNotifications", () => {
    it("should return the unread notifications", () => {
      const newState = notificationReducer(state, actionCreators.markAsRead(2));
      const result = getUnreadNotifications(newState);
      expect(result).toHaveLength(2);
      result.forEach((notification) => {
        expect(notification.isRead).toBe(false);
      });
    });
  });
});