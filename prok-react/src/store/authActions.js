import axios from "axios";

import * as actionTypes from "./actionTypes";

const API_URL_SIGN_UP = "/auth/sign-up";
const API_URL_SIGN_IN = "/auth/sign-in";
const API_URL_OUT = "/auth/sign-out";

export const setCurrentUser = currentUser => {
  console.log("setCurrentUser", currentUser);

  return {
    type: actionTypes.SET_CURRENT_USER,
    currentUser
  };
};

export const signOut = async currentUser => {
  const res = await axios.post(API_URL_OUT, currentUser);
  // setCurrentUser(res.data.session);
  console.log("res", res);
  console.log("currentUser", currentUser);
  return setCurrentUser(res.data);
};
export const login = async (dispatch, loginRequest) => {
  loginRequest.withCredentials = true;
  const res = await axios.post(API_URL_SIGN_IN, loginRequest);
  console.log("res", res);
  // document.cookie = "sid=" + JSON.stringify(res.data.session);
  // setUsername("");
  // setPassword("");
  return dispatch(setCurrentUser(res.data.session));
};

export const signUp = async (dispatch, signUpRequest) => {
  signUpRequest.withCredentials = true;
  const res = await axios.post(API_URL_SIGN_UP, signUpRequest);
  document.cookie = "sid=" + JSON.stringify(res.data.session);
  console.log("res", res);
  return dispatch(setCurrentUser(res.data.session));
};
