import React, { useContext, useEffect } from "react";
import CurrentMatch from "./CurrentMatch";
import MatchContext from "./../../store/match-context";
import socketIOClient from "socket.io-client";

const API_URL = "/matches";

const Matches0003 = props => {
  const context = useContext(MatchContext);
  const matches = context.matches;
  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });

  return <div>Matches{currentMatches}</div>;
};

export default Matches0003;
