import React, { useReducer } from "react";
import matchReducer from "./matchReducer";
import MatchContext from "./match-context";
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
  SET_MATCHES
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";
const API_URL = "//localhost:8080/api/ver0001";

const ReadyState = props => {
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
  const createMatch = () => {
    return dispatch({ type: CREATE_NEW_MATCH });
  };
  const updateMatch = () => {
    return dispatch({ type: UPDATE_MATCH });
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
  const getMatches = () => {
    return dispatch({ type: GET_MATCHES });
  };
  const setMatches = matches => {
    return dispatch({ type: SET_MATCHES, matches: matches });
  };

  // const signIn = (authInfo, history) => async dispatch => {
  //   authInfo.withCredentials = true;
  //   const res = await axios.post(`${API_URL}/auth/sign-in`, authInfo);
  //   history.push("/").then(res => {
  //     dispatch(loginUser(res.data));
  //   });
  // };

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
        setMatches: setMatches
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
