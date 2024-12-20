import * as actions from "../actions/uiActionTypes";
import { Map } from "immutable";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case actions.HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    case actions.LOGIN_SUCCESS:
      return state.set(isUserLoggedIn, true).set("user", action.user);
    case actions.LOGIN_FAILURE:
      return state.set(isUserLoggedIn, false);
    case actions.LOGOUT:
      return state.set(isUserLoggedIn, false).set("user", null);
    default:
      return state;
  }
}