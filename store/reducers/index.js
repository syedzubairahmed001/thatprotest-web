import { createStore, applyMiddleware, compose, combineReducers } from "redux";

// import userReducer from "./user";
import globalReducer from "./global";


const rootReducer = combineReducers({
  //   user: userReducer,
  global: globalReducer,
});

export default rootReducer;
