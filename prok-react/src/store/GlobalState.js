import React, { useReducer } from "react";
import axios from "axios";

import KickballContext, {
  API_GRAPHQL,
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
export const SET_AUTH_ERRORS = "SET_AUTH_ERRORS";

// match
export const CREATE_MATCH = "CREATE_MATCH";
export const SET_MY_CURRENT_MATCH = "SET_MY_CURRENT_MATCH";
export const SET_MATCH_ERRORS = "SET_MATCH_ERRORS";
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
    const graphqlQuery = {
      query: `
      mutation {
        login(userInput: {username: "${loginRequest.username}",password: "${
        loginRequest.password
      }"}){
          cookie{
            expires
          }
          user{
            username
          }
        }
      }
      `
    };
    const res = await axios
      .post(API_GRAPHQL, graphqlQuery)
      .then(res => {
        console.log("res.data.data.login", res.data.data.login);
        authDispatch({ type: SET_CURRENT_USER, payload: res.data.data.login });
      })
      .catch(err => {
        console.log("err", err);
      });
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
    const res = await axios
      .post(API_GRAPHQL, graphqlQuery)
      .then(res => {
        authDispatch({ type: SET_CURRENT_USER, payload: res.data.data.signUp });
      })
      .catch(err => {
        console.log("err", err);
        console.log("err.errors", err.errors);
        if (err.errors && res.errors[0].status === 422) {
          console.log("err.errors", err.errors);
        }
      });
    // console.log("res.data.data.signUp", res.data.data.signUp);
  };
  const signOut = async currentUser => {
    const res = await axios.post(API_GRAPHQL, currentUser);
    authDispatch({ type: SET_CURRENT_USER, payload: res.data.session });
  };

  // match funcs
  const getMatches = async currentUser => {
    const graphqlQuery = {
      query: `
        query {
          matchFeed {
            matchesCount
            matches {
              id
              awayTeam
              homeTeam
              awayTeamScore
              homeTeamScore
              balls
              strikes
              fouls
              outs
              matchType
              currentInning
              matchComplete
            }
          }
          teamFeed{
            teamsCount
            teams{
              teamName
              id
            }
          }
        }
      `
    };
    const res = await axios.post(API_GRAPHQL, graphqlQuery);
    // console.log("res.data.data", res.data.data);
    // console.log("res.data", res.data);
    matchDispatch({ type: GET_MATCHES, payload: res.data.data });
  };

  // team funcs
  const getTeams = async currentUser => {
    const res = await axios(API_GRAPHQL);
    matchDispatch({ type: GET_TEAMS, payload: res.data });
  };

  return (
    <KickballContext.Provider
      value={{
        API_GRAPHQL,
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
