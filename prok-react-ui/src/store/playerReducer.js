import { GET_PLAYERS } from "./actionTypes";
import { getPlayersAction } from "./actions";

import { matchInitialState } from "./DefaultStates";

const getPlayers = state => {
  let players = getPlayersAction();
  console.log("players", players);
};

export default function playerReducer(state = matchInitialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return getPlayers(state, action.players);

    default:
  }
}
