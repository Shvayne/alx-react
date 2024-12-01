import * as actions from "../actions/uiActionTypes";
import { Map } from "immutable";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return initialState.set("isNotificationDrawerVisible", true);
    case actions.HIDE_NOTIFICATION_DRAWER:
      return initialState.set("isNotificationDrawerVisible", false);
    case actions.LOGIN_SUCCESS:
      return initialState.set(isUserLoggedIn, true);
    case actions.LOGIN_FAILURE:
      return initialState.set(isUserLoggedIn, false);
    case actions.LOGOUT:
      return initialState.set(isUserLoggedIn, false);
    default:
      return state;
  }
}