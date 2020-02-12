import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import uiReducer from "./ui/uiReducer";

export default combineReducers({
  user: userReducer,
  ui: uiReducer
});
