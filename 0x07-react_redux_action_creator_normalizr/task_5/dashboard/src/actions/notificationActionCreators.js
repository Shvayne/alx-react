import * as actions from "./notificationActionTypes";

export const markAsRead = (index) => ({ type: actions.MARK_AS_READ, index });
export const setNotificationFilter = (filter) => ({
  type: actions.SET_TYPE_FILTER,
  filter: actions.NotificationTypeFilters[filter],
});