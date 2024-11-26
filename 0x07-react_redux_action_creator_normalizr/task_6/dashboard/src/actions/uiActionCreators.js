import * as actions from "./uiActionTypes";

export const login = (email, password) => ({
  type: actions.LOGIN,
  user: { email, password },
});
export const logout = () => ({ type: actions.LOGOUT });
export const displayNotificationDrawer = () => ({
  type: actions.DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: actions.HIDE_NOTIFICATION_DRAWER,
});

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());