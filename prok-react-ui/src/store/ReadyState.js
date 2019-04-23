import React, { useContext, useEffect, useReducer, useState } from "react";
import matchReducer from "./matchReducer";
import MatchContext from "./match-context";
import axios from "axios";
import * as apiCall from "./actions";
import socketIOClient from "socket.io-client";
import {
  INCREMENT_HOME_SCORE,
  INCREMENT_AWAY_SCORE,
  INCREMENT_BALLS,
  INCREMENT_STRIKES,
  INCREMENT_FOULS,
  INCREMENT_OUTS,
  INCREMENT_CURRENT_INNING,
  CREATE_NEW_MATCH,
  UPDATE_MATCH,
  RESET_COUNT,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER,
  GET_MATCHES,
  SET_MATCHES,
  GET_PLAYERS
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";
const API_URL = "/matches";
// let matches = matchInitialState.matches;

const ReadyState = props => {
  const context = useContext(MatchContext);
  const socket = socketIOClient(context.endpoint);
  const [matches, setCurrentMatches] = useState(matches);
  // console.log("context", context);
  // console.log("ReadyState 8 props", props);
  const [matchState, dispatch] = useReducer(matchReducer, matchInitialState);
  const incrementHomeScore = () => {
    return dispatch({ type: INCREMENT_HOME_SCORE });
  };
  const incrementAwayScore = () => {
    return dispatch({ type: INCREMENT_AWAY_SCORE });
  };
  const incrementBalls = () => {
    return dispatch({ type: INCREMENT_BALLS });
  };
  const incrementStrikes = () => {
    return dispatch({ type: INCREMENT_STRIKES });
  };
  const incrementFouls = () => {
    return dispatch({ type: INCREMENT_FOULS });
  };
  const incrementOuts = () => {
    return dispatch({ type: INCREMENT_OUTS });
  };
  const incrementInning = () => {
    return dispatch({ type: INCREMENT_CURRENT_INNING });
  };
  const resetCount = () => {
    return dispatch({ type: RESET_COUNT });
  };
  const loginUser = userCredentials => {
    return dispatch({ type: LOGIN_USER, userCredentials: userCredentials });
  };
  const logoutUser = () => {
    return dispatch({ type: LOGOUT_USER });
  };
  const registerUser = userCredentials => {
    return dispatch({ type: REGISTER_USER, userCredentials: userCredentials });
  };
  const setUser = user => {
    // console.log("ReadyState setUser 66 user", user);
    return dispatch({ type: SET_USER, user: user });
  };
  const createMatchNow = () => {
    let newMatch = {};
    console.log("context from createMatch()", context);
    return axios.post("/matches").then(result => {
      console.log("result", result);
      newMatch = result.data;
      console.log("newMatch", newMatch);
      // return dispatch({ type: CREATE_NEW_MATCH, payload: newMatch });
      return newMatch;
    });
  };
  const createMatch = () => {
    console.log("createMatch axios.all");
    let newMatch = {};
    let matches = [];
    axios.all([createMatchNow(), getAllMatches()]).then(
      axios.spread((newMatchAPI, matchesAPI) => {
        console.log("newMatchAPI", newMatchAPI);
        console.log("matchesAPI", matchesAPI);
        newMatch = newMatchAPI;
        matches = matchesAPI;
        let createMatchPayload = {
          newMatch: newMatch,
          matches: matches
        };
        console.log("createMatchPayload", createMatchPayload);
        return dispatch({
          type: CREATE_NEW_MATCH,
          payload: createMatchPayload
        });
      })
    );
  };
  const updateMatch = () => {
    return dispatch({ type: UPDATE_MATCH });
  };
  const getAllMatches = () => {
    return axios.get("/matches").then(result => {
      console.log("result", result);
      const matchesAPI = result.data;
      console.log("matchesAPI", matchesAPI);
      return matchesAPI;
      // return dispatch({ type: GET_MATCHES });
    });
  };
  const getMatches = () => {
    return axios.get("/matches").then(result => {
      console.log("result", result);
      const matchesAPI = result.data;
      console.log("matchesAPI", matchesAPI);
      setMatches(matchesAPI);
      return dispatch({ type: GET_MATCHES });
    });
  };
  const setMatches = matches => {
    console.log("matches", matches);
    return dispatch({ type: SET_MATCHES, matches: matches });
  };

  const getPlayers = () => {
    return dispatch({ type: GET_PLAYERS });
  };

  // const signIn = (authInfo, history) => async dispatch => {
  //   authInfo.withCredentials = true;
  //   const res = await axios.post(`${API_URL}/auth/sign-in`, authInfo);
  //   history.push("/").then(res => {
  //     dispatch(loginUser(res.data));
  //   });
  // };

  const sendToSocketIO = () => {
    // const socket = socketIOClient(context.endpoint);
    console.log("matches", matches);
    socket.emit("update-matches", matches);
  };
  useEffect(() => {
    // const res = apiCall.getMatchesAction();
    // console.log("res", res);
    // axios.get(API_URL).then(result => {
    //   console.log("result", result);
    //   const matchesAPI = result.data;
    //   console.log("matchesAPI", matchesAPI);
    //   setMatches(matchesAPI);
    // });
    getMatches();
  }, [matches]);
  useEffect(() => {
    return () => {
      sendToSocketIO();
      console.log("matches", matches);
      socket.on("updated-matches", serverEmittedMatches => {
        console.log("serverEmittedMatches", serverEmittedMatches);
        if (serverEmittedMatches.length !== 0) {
          console.log(
            "serverEmittedMatches.length",
            serverEmittedMatches.length
          );
          setMatches(serverEmittedMatches);
        }
      });
    };
  }, [matches]);

  return (
    <MatchContext.Provider
      value={{
        endpoint: matchInitialState.endpoint,
        innings: matchInitialState.match.innings,
        match: matchInitialState.match,
        matches: matchInitialState.matches,
        incrementHomeScore: incrementHomeScore,
        incrementAwayScore: incrementAwayScore,
        incrementBalls: incrementBalls,
        incrementStrikes: incrementStrikes,
        incrementFouls: incrementFouls,
        incrementOuts: incrementOuts,
        incrementInning: incrementInning,
        createMatch: createMatch,
        resetCount: resetCount,
        updateMatch: updateMatch,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser,
        setUser: setUser,
        getMatches: getMatches,
        setMatches: setMatches,
        getPlayers: getPlayers
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
