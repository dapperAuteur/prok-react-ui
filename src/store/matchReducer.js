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

const incrementAwayScore = (match, state) => {
  let updatedMatch = [...state.match];
  match.awayTeamScore++;
  updatedMatch = match;
  const updatedMatches = state.matches.map(m =>
    m.scoreKeeper === match.scoreKeeper ? { ...m, ...match } : m
  );
  return { ...state, match: updatedMatch, matches: updatedMatches };
};

const incrementHomeScore = (match, state) => {
  let updatedMatch = [...state.match];
  match.homeTeamScore++;
  updatedMatch = match;
  const updatedMatches = state.matches.map(m =>
    m.scoreKeeper === match.scoreKeeper ? { ...m, ...match } : m
  );
  return { ...state, match: updatedMatch, matches: updatedMatches };
};

const updateMatch = (match, state) => {
  let updatedMatch = [...state.match];
  updatedMatch = match;
  const updatedMatches = state.matches.map(m =>
    m.scoreKeeper === match.scoreKeeper ? { ...m, ...match } : m
  );
  return { ...state, match: updatedMatch, matches: updatedMatches };
};

export function matchReducer(state, action) {
  switch (action.type) {
    case INCREMENT_AWAY_SCORE:
      return incrementAwayScore(action.match, state);
    case INCREMENT_HOME_SCORE:
      return incrementHomeScore(action.match, state);
    case UPDATE_MATCH:
      return updateMatch(action.match, state);
    default:
      return state;
  }
}
