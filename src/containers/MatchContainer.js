import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import ReactGA from "react-ga";
// import authReducer from "./../store/reducers/authReducer";
import reducer from "./../store/reducer";
// import { getCurrentUser } from "./../store/actions/index";
import App from "./App";
import Match from "../components/Match/Match0002_createMatchBranch";
console.log("reducer", reducer);
const rootReducer = combineReducers({ reducer });

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

if (
  typeof Storage !== "undefined" &&
  localStorage.hasOwnProperty("currentUser")
) {
  // store.dispatch(getCurrentUser());
  // console.log(currentUser);
}
const supportsHistory = "pushState" in window.history;
const MatchContainer = () => (
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
      <App />
    </Router>
  </Provider>
);

export default MatchContainer;
