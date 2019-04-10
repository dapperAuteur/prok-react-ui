import React, { useContext, useEffect, useReducer } from "react";
import MatchContext from "../../store/match-context";
import "./Players.css";
import axios from "axios";
import Player from "./Player";

const API_URL = "/players";

const getPlayers = async context => {
  const res = await axios.get(API_URL).then(serverPlayers => {
    console.log("serverPlayers", serverPlayers);
    return serverPlayers.data;
  });
  return res;
};

export default function Players() {
  const context = useContext(MatchContext);
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  useEffect(() => {
    console.log("context", context);
  }, []);
  return (
    <div>
      <Player />
    </div>
  );
}
