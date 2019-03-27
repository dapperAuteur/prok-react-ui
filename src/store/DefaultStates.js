import React, { useReducer } from "react";
import * as actionTypes from "./actionTypes";

export const matchInitialState = {
  endpoint: "localhost:4001",
  // endpoint: "http://192.168.0.4:4001",
  match: {
    incrementAwayScore: () => {},
    decrementAwayScore: () => {},
    incrementHomeScore: () => {},
    decrementHomeScore: () => {},
    homeTeam: "5c9a9ef3e6814f122a1af324",
    awayTeam: "5c9a9e2be6814f122a1af322",
    homeTeamScore: 0,
    awayTeamScore: 0,
    currentInning: 0,
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
    ],
    balls: 0,
    strikes: 0,
    fouls: 0,
    outs: 0
  },
  matches: []
};

export const matchDefaultState = {
  match: {
    homeTeam: "5c9a9ef3e6814f122a1af324",
    awayTeam: "5c9a9e2be6814f122a1af322"
  },
  matches: []
};
