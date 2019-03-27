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
  UPDATE_MATCH
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";

const ReadyState = props => {
  console.log("ReadyState 8 props", props);
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
        updateMatch: updateMatch
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
