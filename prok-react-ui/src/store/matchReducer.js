import {
  UPDATE_MATCH,
  INCREMENT_HOME_SCORE,
  INCREMENT_AWAY_SCORE,
  INCREMENT_BALLS,
  INCREMENT_STRIKES,
  INCREMENT_FOULS,
  INCREMENT_OUTS,
  INCREMENT_CURRENT_INNING,
  CREATE_NEW_MATCH,
  RESET_COUNT,
  SET_USER,
  LOGOUT_USER,
  GET_MATCHES,
  SET_MATCHES
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";
// console.log("matchInitialState", matchInitialState);
const setUser = (state, user) => {
  // console.log("matchReducer 17 user", user);
  // console.log("state", state);
  let updatedState = state;
  // console.log("updatedState", updatedState);
  // updatedState.currentUser = user;
  updatedState.currentUser = user;
  updatedState.match.scoreKeeper = user._id;
  // console.log("matchReducer 21 updatedState", updatedState);
  return updatedState;
};
const setMatches = (state, matches) => {
  console.log("matches", matches);
  console.log("state", state);
  let updatedState = state;
  updatedState.matches = matches;
  console.log("matchReducer 35 updatedState", updatedState);
  return updatedState;
};
const incrementAwayScoreReducer = state => {
  let updatedMatch = state.match;
  updatedMatch.awayTeamScore++;
  return { ...state, match: updatedMatch };
};
const incrementHomeScoreReducer = state => {
  let updatedMatch = state.match;
  updatedMatch.homeTeamScore++;
  return { ...state, match: updatedMatch };
};
const incrementBalls = state => {
  let updatedMatch = state.match;
  updatedMatch.balls++;
  return { ...state, match: updatedMatch };
};
const incrementStrikes = state => {
  let updatedMatch = state.match;
  updatedMatch.strikes++;
  return { ...state, match: updatedMatch };
};
const incrementFouls = state => {
  let updatedMatch = state.match;
  updatedMatch.fouls++;
  return { ...state, match: updatedMatch };
};
const incrementOuts = state => {
  let updatedMatch = state.match;
  updatedMatch.outs++;
  return { ...state, match: updatedMatch };
};
const incrementCurrentInning = state => {
  let updatedMatch = state.match;
  updatedMatch.currentInning++;
  updatedMatch.outs = 0;
  updatedMatch.balls = 0;
  updatedMatch.strikes = 0;
  updatedMatch.fouls = 0;
  return { ...state, match: updatedMatch };
};
const resetCount = state => {
  let updatedMatch = state.match;
  updatedMatch.balls = 0;
  updatedMatch.strikes = 0;
  updatedMatch.fouls = 0;
  return { ...state, match: updatedMatch };
};
const createNewMatch = (state, payload) => {
  // console.log("state.state", state);
  // console.log("payload", payload);
  // let updatedMatches = state.matches;
  // keep for off-line createNewMatch()
  let updatedMatches = [];
  let newMatch = {};
  if (!payload.newMatch.hasOwnProperty("_id")) {
    // console.log("!payload.newMatch.hasOwnProperty(_id)===false");
    updatedMatches.push(matchInitialState.match);
    newMatch = matchInitialState.match;
  } else {
    updatedMatches = payload.matches;
    newMatch = payload.newMatch;
    // console.log("updatedMatches", updatedMatches);
    // console.log("newMatch", newMatch);
  }

  // console.log("updatedMatches", updatedMatches);
  // console.log("newMatch", newMatch);
  // console.log("state", state);

  return {
    ...state,
    match: newMatch,
    matches: updatedMatches
  };
};
const updateMatch = (match, state) => {
  let updatedMatch = [...state.match];
  updatedMatch = match;
  const updatedMatches = state.matches.map(m =>
    m.scoreKeeper === match.scoreKeeper ? { ...m, ...match } : m
  );
  return { ...state, match: updatedMatch, matches: updatedMatches };
};

export default function matchReducer(state = matchInitialState, action) {
  // console.log("state", state);
  // console.log("matchInitialState", matchInitialState);
  switch (action.type) {
    case SET_MATCHES:
      return setMatches(state, action.matches);
    case SET_USER:
      return setUser(state, action.user);
    case INCREMENT_HOME_SCORE:
      return incrementHomeScoreReducer(state);
    case INCREMENT_AWAY_SCORE:
      return incrementAwayScoreReducer(state);
    case UPDATE_MATCH:
      return updateMatch(state, action.match);
    case INCREMENT_BALLS:
      return incrementBalls(state);
    case INCREMENT_STRIKES:
      return incrementStrikes(state);
    case INCREMENT_FOULS:
      return incrementFouls(state);
    case INCREMENT_OUTS:
      return incrementOuts(state);
    case RESET_COUNT:
      return resetCount(state);
    case CREATE_NEW_MATCH:
      // console.log("action", action);
      // console.log("action.payload", action.payload);
      // console.log("state", state);
      return createNewMatch(state, action.payload);
    case INCREMENT_CURRENT_INNING:
      return incrementCurrentInning(state);
    default:
      return state;
  }
}