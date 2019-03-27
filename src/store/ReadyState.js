import React, { useReducer } from "react";
import matchReducer from "./matchReducer";
import MatchContext from "./match-context";
import {
  INCREMENT_HOME_SCORE,
  DECREMENT_HOME_SCORE,
  INCREMENT_AWAY_SCORE,
  DECREMENT_AWAY_SCORE,
  INCREMENT_BALLS,
  DECREMENT_BALLS,
  INCREMENT_STRIKES,
  DECREMENT_STRIKES,
  INCREMENT_FOULS,
  DECREMENT_FOULS,
  INCREMENT_OUTS,
  DECREMENT_OUTS,
  INCREMENT_CURRENT_INNING,
  DECREMENT_CURRENT_INNING,
  UPDATE_MATCH
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";

const ReadyState = props => {
  console.log("ReadyState 8 props", props);
  const [matchState, dispatch] = useReducer(matchReducer, matchInitialState);
  const incrementAwayScore = match => {
    console.log("ReadyState 27 match", match);
    dispatch({ type: INCREMENT_AWAY_SCORE, match: match });
  };
  const incrementHomeScore = match => {
    console.log("ReadyState 31 match", match);
    dispatch({ type: INCREMENT_HOME_SCORE, match: match });
  };
  const updateMatch = match => {
    console.log("ReadyState 11 match", match);
    dispatch({ type: UPDATE_MATCH, match: match });
  };
  return (
    <MatchContext.Provider
      value={{
        endpoint: matchState.endpoint,
        innings: matchState.innings,
        match: matchState.match,
        matches: matchState.matches,
        incrementAwayScore: incrementAwayScore,
        incrementHomeScore: incrementHomeScore,
        updateMatch: updateMatch
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
