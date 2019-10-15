import {combineReducers} from "redux";
import usersReducers from "./usersReducers";
import authReducers from "./authReducers";

export default combineReducers({
  users: usersReducers,
  auth: authReducers
})
