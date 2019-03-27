import {
  UPDATE_MATCH,
  INCREMENT_HOME_SCORE,
  INCREMENT_AWAY_SCORE
} from "./actionTypes";
import { matchInitialState } from "./DefaultStates";
const incrementAwayScoreReducer = state => {
  let updatedMatch = state.match;
  updatedMatch.awayTeamScore++;
  return { ...state, match: updatedMatch };
};
const incrementHomeScoreReducer = state => {
  console.log("state", state);
  let updatedMatch = state.match;
  updatedMatch.homeTeamScore++;
  return { ...state, match: updatedMatch };
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
  switch (action.type) {
    case INCREMENT_HOME_SCORE:
      return incrementHomeScoreReducer(state);
    case INCREMENT_AWAY_SCORE:
      return incrementAwayScoreReducer(state);
    case UPDATE_MATCH:
      return updateMatch(action.match, state);
    default:
      return state;
  }
}
