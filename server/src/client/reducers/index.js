import {combineReducers} from "redux";
import usersReducers from "./usersReducers";
import authReducers from "./authReducers";
import adminsReducer from "./adminsReducer";

export default combineReducers({
  users: usersReducers,
  auth: authReducers,
  admins: adminsReducer
})
