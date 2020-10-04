import { createStore, applyMiddleware, compose, combineReducers } from "redux";

// import userReducer from "./user";
import globalReducer from "./global";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export default rootReducer;
