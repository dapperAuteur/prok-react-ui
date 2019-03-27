import { UPDATE_MATCH } from "./actionTypes";
import { matchInitialState } from "./DefaultStates";

const updateMatch = (match, state) => {
  let updatedMatch = [...state.match];
  updatedMatch = match;
  const updatedMatches = state.matches.map(m =>
    m.scoreKeeper === match.scoreKeeper ? { ...m, ...match } : m
  );
  return { ...state, match: updatedMatch, matches: updatedMatches };
};

export function matchReducer(state = matchInitialState, action) {
  switch (action.type) {
    case UPDATE_MATCH:
      return updateMatch(action.match, state);
    default:
      return state;
  }
}
