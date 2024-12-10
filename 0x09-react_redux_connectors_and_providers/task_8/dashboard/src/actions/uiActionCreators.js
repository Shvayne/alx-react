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
export const loginSuccess = () => ({ type: actions.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: actions.LOGIN_FAILURE });

// Bound action creators
export const boundLogin = (email, password) => (dispatch) =>
  dispatch(login(email, password));
export const boundLogout = () => (dispatch) => dispatch(logout());
export const boundDisplayNotificationDrawer = () => (dispatch) =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => (dispatch) =>
  dispatch(hideNotificationDrawer());

// Async action creator
export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password)); // Dispatch login action
  return fetch("/login-success.json")
    .then((res) => res.json())
    .then((json) => {
      dispatch(loginSuccess());
      return json;
    })
    .catch((error) => {
      dispatch(loginFailure());
      throw error;
    });
};
