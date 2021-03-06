import {FETCH_ADMINS, FETCH_CURRENT_USER} from "../actions";

export default (state=[], action)=>{
  switch (action.type()) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
}
