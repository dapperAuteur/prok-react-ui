import axios from "axios";

import * as actionTypes from "./actionTypes";
// import * as authActions from "./authActions";

const API_URL_SIGN_UP = "/auth/sign-up";
const API_URL_SIGN_IN = "/auth/sign-in";
const API_URL_OUT = "/auth/sign-out";

const initialState = {
  username: "",
  userRole: "",
  profilePicture: "",
  password: ""
};

const login = async loginRequest => {
  loginRequest.withCredentials = true;
  const res = await axios.post(API_URL_SIGN_IN, loginRequest);
  console.log("res", res);
  // document.cookie = "sid=" + JSON.stringify(res.data.session);
  // setUsername("");
  // setPassword("");
  return setCurrentUser(res.data.session);
};

const setCurrentUser = currentUser => {
  console.log("currentUser", currentUser);
  document.cookie = "sid=" + JSON.stringify(currentUser);
};

const signOut = async currentUser => {
  const res = await axios.post(API_URL_OUT, currentUser);
  // setCurrentUser(res.data.session);
  console.log("res", res);
  console.log("currentUser", currentUser);
  return setCurrentUser(res.data);
};

const signUp = async signUpRequest => {
  signUpRequest.withCredentials = true;
  const res = await axios.post(API_URL_SIGN_UP, signUpRequest);
  document.cookie = "sid=" + JSON.stringify(res.data.session);
  console.log("res", res);
  return setCurrentUser(res.data.session);
};

const authReducer = (state = initialState, action) => {
  let currentUser;
  console.log("action", action);
  console.log("state", state);

  console.log("authReducer");
  switch (action.type) {
    case actionTypes.LOG_IN:
      login(action.payload);
      return Object.assign({}, state, {
        currentUser
      });
    case actionTypes.SIGN_OUT:
      console.log("object");
      signOut(action.payload);
      return Object.assign({}, state, {
        currentUser
      });
    case actionTypes.SIGN_UP:
      signUp(action.payload);
      return Object.assign({}, state, {
        currentUser
      });
    case actionTypes.SET_CURRENT_USER:
      console.log("set current user action", action);
      currentUser = action.currentUser;
      console.log("currentUser", currentUser);
      document.cookie = "sid=" + JSON.stringify(currentUser);
      return Object.assign({}, state, {
        currentUser
      });
    default:
      console.log("default reducer action");
  }
};

export default authReducer;
