import { combineReducers } from "redux";
import questionReducer from "../modules/Question";

const rootReducer = combineReducers({ questionReducer });

export default rootReducer;
