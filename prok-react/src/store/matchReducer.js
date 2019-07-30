import axios from "axios";

import * as actionTypes from "./actionTypes";
import { addTeamNamesToMatches } from "./addTeamNamesToMatches";

const API_URL_MATCHES = "/matches";

const matchInitialState = {
  errors: [],
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

const createMatch = async newMatch => {
  const res = await axios.post(API_URL_MATCHES, newMatch);
  return setMyCurrentMatch(res.data);
};

const setMyCurrentMatch = myCurrentMatch => {
  console.log("myCurrentMatch", myCurrentMatch);
  document.cookie = "myCurrentMatch=" + JSON.stringify(myCurrentMatch);
};

// const setMatches = (state, matches) => {
//   console.log("state", state);
//   console.log("matches", matches);
// };

const matchReducer = (state = matchInitialState, action) => {
  let createdMatch;
  let match;
  let matches;
  let teams;
  let errors;
  let myCurrentMatch;
  // console.log("action", action);
  // console.log("state", state);

  switch (action.type) {
    case actionTypes.SET_MATCH_ERRORS:
      console.log("action", action);
      errors = action.payload;
      return Object.assign({}, state, errors);
    case actionTypes.CREATE_MATCH:
      console.log("action", action);
      createdMatch = action.payload.createMatch;
      if (typeof Storage !== "undefined") {
        localStorage.setItem("createdMatch", JSON.stringify(createdMatch));
      }
      return { ...state, myCurrentMatch: myCurrentMatch };
    case actionTypes.SET_MY_CURRENT_MATCH:
      return;
    case actionTypes.UPDATE_MATCH:
      return;
    case actionTypes.GET_MATCH:
      return;
    case actionTypes.GET_MATCHES:
      // console.log("action", action);
      matches = action.payload.matchFeed.matches;
      // console.log("matches", matches);
      teams = action.payload.teamFeed.teams;
      const matchesWithNames = addTeamNamesToMatches(matches, teams);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("matches", JSON.stringify(matchesWithNames));
        localStorage.setItem("teams", JSON.stringify(teams));
      }
      return { ...state, teams, matches: matchesWithNames };
    case actionTypes.DELETE_MATCH:
      return;
    case actionTypes.GET_TEAMS:
      console.log("action", action);
      return;

    default:
      return;
  }
};

export default matchReducer;
