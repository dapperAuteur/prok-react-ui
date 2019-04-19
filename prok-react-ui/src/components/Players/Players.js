import React, { useContext, useEffect, useReducer } from "react";
import MatchContext from "../../store/match-context";
import playerReducer from "./../../store/playerReducer";
import "./Players.css";
import axios from "axios";
import { getPlayersAction } from "./../../store/actions";
import Player from "./Player";

const API_URL = "/players";

export default function Players() {
  const context = useContext(MatchContext);
  const [state, dispatch] = useReducer(playerReducer, context);
  let players = [];
  // const getPlayers = async dispatch => {
  //   const res = await axios.get(API_URL).then(serverPlayers => {
  //     console.log("serverPlayers", serverPlayers);
  //     return serverPlayers.data;
  //   });
  //   players = res;
  //   console.log("res", res);
  //   return res;
  // };
  const playerComponents = players.map(p => {
    console.log("p", p);
    return <Player props={p} key={p._id} />;
  });
  useEffect(() => {
    console.log("context", context);
    // getPlayers();
    // console.log("getPlayers()", getPlayers());
    console.log("getPlayersAction", getPlayersAction());
  }, [playerComponents]);
  console.log("playerComponents", playerComponents);
  if (playerComponents.length === 0) {
    return (
      <div>
        <h2>No Players</h2>
      </div>
    );
  } else {
    return <div>{playerComponents}</div>;
  }
}
