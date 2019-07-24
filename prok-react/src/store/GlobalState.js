import React, { useReducer } from "react";
import axios from "axios";

import KickballContext, {
  API_GRAPHQL,
  API_URL_SIGN_UP,
  API_URL_SIGN_IN,
  API_URL_OUT,
  API_URL_MATCHES,
  API_URL_TEAMS,
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

// team
export const GET_TEAMS = "GET_TEAMS";

const GlobalState = props => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [matchState, matchDispatch] = useReducer(matchReducer, {});

  // auth funcs
  const login = async loginRequest => {
    loginRequest.withCredentials = true;
    const res = await axios.post(API_GRAPHQL, loginRequest);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };
  const signUp = async signUpRequest => {
    signUpRequest.withCredentials = true;
    console.log("signUpRequest", signUpRequest);
    const graphqlQuery = {
      query: `
        mutation {
          signUp(userInput: {username: "${signUpRequest.username}",password: "${
        signUpRequest.password
      }"}) {
            cookie {
              expires
              originalMaxAge
              secure
              httpOnly
              path
              sameSite
            }
            user {
              username
              _id
            }
          }
        }
      `
    };
    const res = await axios.post(API_GRAPHQL, graphqlQuery);
    console.log("res.data.data.signUp", res.data.data.signUp);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.data.signUp });
  };
  const signOut = async currentUser => {
    const res = await axios.post(API_GRAPHQL, currentUser);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };

  // match funcs
  const getMatches = async currentUser => {
    const res = await axios(API_GRAPHQL);
    // console.log("res", res);
    // console.log("res.data", res.data);
    matchDispatch({ type: GET_MATCHES, payload: res.data });
  };

  // team funcs
  const getTeams = async currentUser => {
    const res = await axios(API_GRAPHQL);
    matchDispatch({ type: GET_TEAMS, payload: res.data });
  };

  const getMatchesAndTeams = async currentUser => {
    const res = await axios.all([getMatches(), getTeams()]);
  };

  return (
    <KickballContext.Provider
      value={{
        API_URL_SIGN_UP,
        API_URL_SIGN_IN,
        API_URL_OUT,
        API_URL_MATCHES,
        GET_TEAMS,
        authInitialState,
        matchInitialState,
        getMatches,
        getTeams,
        login,
        signOut,
        signUp,
        authState,
        matchState,
        matches: matchState.matches
      }}
    >
      {props.children}
    </KickballContext.Provider>
  );
};

export default GlobalState;
