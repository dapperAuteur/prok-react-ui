import React, { useReducer } from "react";
import matchReducer from "./matchReducer";
import MatchContext from "./match-context";
import { UPDATE_MATCH } from "./actionTypes";
import { matchInitialState } from "./DefaultStates";

const ReadyState = props => {
  console.log("ReadyState 8 props", props);
  const [matchState, dispatch] = useReducer(matchReducer, matchInitialState);
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
        updateMatch: updateMatch
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default ReadyState;
