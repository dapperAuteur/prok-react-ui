import React, { useReducer } from "react";
import matchReducer from "./matchReducer";
import MatchContext from "./match-context";
import { INCREMENT_HOME_SCORE, INCREMENT_AWAY_SCORE } from "./actionTypes";
import { matchInitialState } from "./DefaultStates";

const ReadyState = props => {
  console.log("ReadyState 8 props", props);
  const [matchState, dispatch] = useReducer(matchReducer, matchInitialState);
  const incrementHomeScore = num => {
    console.log("ReadyState 31 match");
    console.log("num", num);
    return dispatch({ type: INCREMENT_HOME_SCORE });
  };
  const incrementStat = state => {
    console.log("state", state);
    return dispatch({ type: INCREMENT_AWAY_SCORE });
  };
  return (
    <MatchContext.Provider
      value={{
        endpoint: matchInitialState.endpoint,
        innings: matchInitialState.innings,
        match: matchInitialState.match,
        matches: matchInitialState.matches,
        incrementHomeScore: incrementHomeScore,
        incrementAwayScore: incrementStat
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
