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
export const login = async loginRequest => dispatch => {
  fetch(`${API_URL_SIGN_IN}`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ ...loginRequest })
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message };
            throw err;
          });
        } else {
          let err = {
            errorMessage: "Please Try Again Later. Server Is NOT Responding."
          };
          throw err;
        }
      }
      return resp.json();
    })
    .then(currentUser => {
      console.log("currentUser", currentUser);
      dispatch({ type: actionTypes.SET_CURRENT_USER, payload: currentUser });
    });
};

export const signUp = async (dispatch, signUpRequest) => {
  signUpRequest.withCredentials = true;
  const res = await axios.post(API_URL_SIGN_UP, signUpRequest);
  document.cookie = "sid=" + JSON.stringify(res.data.session);
  console.log("res", res);
  return dispatch(setCurrentUser(res.data.session));
};
