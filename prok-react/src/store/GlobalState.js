import React, { useReducer } from "react";
import axios from "axios";

import KickballContext, {
  API_URL_SIGN_UP,
  API_URL_SIGN_IN,
  API_URL_OUT,
  API_URL_MATCHES,
  authInitialState,
  matchInitialState
} from "./kickball-context";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";

// authentication
export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// match
export const CREATE_MATCH = "CREATE_MATCH";
export const SET_MY_CURRENT_MATCH = "SET_MY_CURRENT_MATCH";
export const UPDATE_MATCH = "UPDATE_MATCH";
export const GET_MATCH = "GET_MATCH";
export const GET_MATCHES = "GET_MATCHES";
export const DELETE_MATCH = "DELETE_MATCH";

const GlobalState = props => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  // const [matchState, dispatch] = useReducer(matchReducer, {})
  const login = async loginRequest => {
    loginRequest.withCredentials = true;
    const res = await axios.post(API_URL_SIGN_IN, loginRequest);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };
  const signUp = async signUpRequest => {
    signUpRequest.withCredentials = true;
    const res = await axios.post(API_URL_SIGN_UP, signUpRequest);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };
  const signOut = async currentUser => {
    const res = await axios.post(API_URL_OUT, currentUser);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };
  return (
    <KickballContext.Provider
      value={{
        API_URL_SIGN_UP,
        API_URL_SIGN_IN,
        API_URL_OUT,
        API_URL_MATCHES,
        authInitialState,
        matchInitialState,
        login,
        signOut,
        signUp,
        authState
      }}
    >
      {props.children}
    </KickballContext.Provider>
  );
};

export default GlobalState;
