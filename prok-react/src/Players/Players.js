import React, { useEffect, useState } from "react";
import axios from "axios";
import openSocket from "socket.io-client";
import Player from "./Player/Player";

const API_URL = "http://localhost:8080";
const API_URL_PLAYERS = "/players";
const socket = openSocket(API_URL);

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [showAllPlayers, setShowAllPlayers] = useState(true);

  const getPlayers = async function() {
    const res = await axios(API_URL_PLAYERS);
    if (showAllPlayers) {
      setPlayers(res.data);
    }
    console.log("res", res);
  };

  let currentPlayers = null;

  const toggleShowAllPlayers = players => {
    console.log("players", players);
    let filteredPlayers = players.filter(
      player => player.currentlyPlaying === true
    );
    setShowAllPlayers(!showAllPlayers);
    console.log("showAllPlayers", showAllPlayers);
    console.log("filteredPlayers", filteredPlayers);
    setPlayers(filteredPlayers);
  };

  if (players.length > 0) {
    currentPlayers = players.map(player => {
      return <Player player={player} key={player._id} />;
    });
  } else {
    currentPlayers = <h2>No Players</h2>;
  }

  useEffect(() => {
    getPlayers();
  }, [showAllPlayers]);

  useEffect(() => {
    document.title = `${players.length} players registered`;
  }, [players, showAllPlayers]);

  useEffect(() => {
    socket.on("createdPlayer", data => {
      console.log("data", data);
      if (data.action === "createdPlayer") {
        getPlayers();
      }
    });
  }, []);

  return <div />;
};

export default Players;
