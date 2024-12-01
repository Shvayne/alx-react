import * as actions from "../actions/notificationActionTypes";

export const initialState = {
  notifications: [],
  filter: actions.NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action) {
  let notifications;
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      notifications = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      return { ...state, notifications };
    case actions.MARK_AS_READ:
      notifications = state.notifications.map((notification) =>
        notification.id === action.index
          ? { ...notification, isRead: true }
          : notification
      );
      return { ...state, notifications };
    case actions.SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}