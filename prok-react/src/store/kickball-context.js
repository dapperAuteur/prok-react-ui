import React from "react";

export const API_GRAPHQL = "/api/ver0001/graphql";

export const authInitialState = {
  cookie: {
    expires: "",
    httpOnly: true,
    originalMaxAge: 0,
    path: "",
    sameSite: true,
    secure: false
  },
  currentUser: {
    _id: "",
    username: "",
    userRole: "",
    profilePicture: "",
    password: "",
    updatedAt: "",
    createdAt: ""
  }
};

export const matchInitialState = {
  matches: [],
  teams: [],
  myCurrentMatch: {
    scoreKeeper: "",
    homeTeam: "5c9a9ef3e6814f122a1af324",
    homeTeamKickingOrder: [],
    homeTeamScore: 0,
    awayTeam: "5c9a9e2be6814f122a1af322",
    awayTeamKickingOrder: [],
    awayTeamScore: 0,
    matchLocation: "",
    currentInning: "TOP 1ST",
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
    matchType: "FRIENDLY",
    matchTypes: ["FRIENDLY", "SEASON", "PLAYOFF", "TOURNAMENT", "CHARITY"],
    extraInnings: false,
    matchComplete: false,
    balls: 0,
    strikes: 0,
    fouls: 0,
    outs: 0,
    encroachmentWarning: false,
    matchLength: 6,
    lengthMeasured: "INNINGS",
    lengthMeasuredOptions: ["INNINGS", "TIME"]
  }
};

export default React.createContext({
  API_GRAPHQL: API_GRAPHQL,
  authInitialState: authInitialState,
  matchInitialState: matchInitialState
});
