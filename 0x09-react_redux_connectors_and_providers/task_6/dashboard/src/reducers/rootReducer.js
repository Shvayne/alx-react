import { combineReducers } from "redux"; // Import combineReducers from Redux
import uiReducer from "./uiReducer";
import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  courses: courseReducer, // Maps to courseReducer
  notifications: notificationReducer, // Maps to notificationReducer
  ui: uiReducer, // Maps to uiReducer
});

export default rootReducer;
