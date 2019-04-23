import React, { useContext, useEffect } from "react";
import CurrentMatch from "./CurrentMatch";
import MatchContext from "./../../store/match-context";
import socketIOClient from "socket.io-client";

const API_URL = "/matches";

const Matches0003 = props => {
  console.log("props", props);
  const context = useContext(MatchContext);
  const matches = context.matches;
  console.log("context", context);
  console.log("matches", matches);
  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });

  useEffect(() => {
    return () => {
      // context
    };
  }, [matches]);
  return <div>Matches{currentMatches}</div>;
};

export default Matches0003;
