import React from "react";

const INCREMENT_AWAY = "INCREMENT_AWAY";
const INCREMENT_HOME = "INCREMENT_HOME";
const CREATE_MATCH = "CREATE_MATCH";

const initialState = {
  numberOfMatches: 0,
  currentMatch: {
    matchId: 0,
    awayTeam: 0,
    homeTeam: 0
  },
  matches: []
};

export default function reducer(state = initialState, action) {
  console.log("state", state);
  switch (action.type) {
    case INCREMENT_AWAY:
      console.log("INCREMENT_AWAY action", action);
      console.log("state", state);
      break;
    case INCREMENT_HOME:
      console.log("INCREMENT_HOME action", action);
      console.log("state", state);
      break;
    case CREATE_MATCH:
      let newNumberOfMatches = state.numberOfMatches++;

      let match = {
        matchId: newNumberOfMatches,
        awayTeam: 0,
        homeTeam: 0
      };
      let newMatches = state.matches;
      newMatches.push(match);
      const newState = Object.assign({
        ...state,
        numberOfMatches: newNumberOfMatches,
        matches: newMatches
      });
      console.log("newState", newState);
      return newState;
    default:
      break;
  }
}
