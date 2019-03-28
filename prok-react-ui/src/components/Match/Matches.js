import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MatchContext from "../../store/match-context";
import CurrentMatch from "./CurrentMatch";
import socketIOClient from "socket.io-client";

const API_URL = "//localhost:8080/api/ver0001/matches";
// const API_URL = "https://react-shopping-list.firebaseio.com/matches.json";

export default function Matches(props) {
  console.log("props", props);
  const context = useContext(MatchContext);
  const { matches } = context;
  console.log("context.matches.length", context.matches.length);
  const setMatches = context.setMatches;
  const getCurrentMatches = async context => {
    const res = await axios.get(API_URL).then(serverMatches => {
      // console.log("serverMatches", serverMatches);
      setMatches(serverMatches.data);
      return serverMatches.data;
    });
    return res;
  };

  const send = () => {
    const socket = socketIOClient(context.endpoint);
    console.log("matches", matches);
    socket.emit("update-matches", matches);
  };

  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });
  useEffect(() => {
    send();
    getCurrentMatches();
    const socket = socketIOClient(context.endpoint);
    socket.on("updated-matches", serverEmit => {
      console.log("serverEmit.matches", serverEmit);
      if (serverEmit.length !== 0) {
        console.log("serverEmit.length", serverEmit.length);
        setMatches(serverEmit);
      }
    });
  }, [matches]);

  return (
    <div>
      <h2>Matches</h2>
      {currentMatches}
    </div>
  );
}
