import React from "react";
import { matchInitialState } from "./DefaultStates";

export default React.createContext({
  ...matchInitialState,
  incrementAwayScore: score => {
    score++;
  },
  decrementAwayScore: () => {},
  incrementHomeScore: score => {
    score++;
  },
  decrementHomeScore: () => {},
  incrementStat: () => {},
  decrementStat: () => {},
  incrementBalls: () => {},
  decrementBalls: () => {},
  incrementStrikes: () => {},
  decrementStrikes: () => {},
  incrementFouls: () => {},
  decrementFouls: () => {},
  incrementOuts: () => {},
  decrementOuts: () => {},
  updateMatch: match => {},
  // updateMatches: matches => {},
  innings: [
    "Top 1st",
    "Bottom 1st",
    "Top 2nd",
    "Bottom 2nd",
    "Top 3rd",
    "Bottom 3rd",
    "Top 4th",
    "Bottom 4th",
    "Top 5th",
    "Bottom 5th",
    "Top 6th",
    "Bottom 6th",
    "MATCH OVER"
  ]
});
