import * as actions from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialState = Map({
  notifications: [],
  filter: actions.NotificationTypeFilters.DEFAULT,
});

export default function notificationReducer(state = initialState, action) {
  let notifications;
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      notifications = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      const normalizedNotifications = notificationsNormalizer(notifications);
      return state.merge({
        notifications: normalizedNotifications,
      });
    case actions.MARK_AS_READ:
      return state.setIn(
        [
          "notifications",
          "entities",
          "notifications",
          action.index.toString(),
          "isRead",
        ],
        true
      );
    case actions.SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
}