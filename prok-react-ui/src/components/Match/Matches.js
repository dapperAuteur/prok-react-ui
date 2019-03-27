import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MatchContext from "../../store/match-context";
import CurrentMatch from "./CurrentMatch";

const API_URL = "//localhost:8080/api/ver0001/matches";
// const API_URL = "https://react-shopping-list.firebaseio.com/matches.json";

export default function Matches(props) {
  console.log("props", props);
  const context = useContext(MatchContext);
  // console.log("context", context);
  const setMatches = context.setMatches;
  const getCurrentMatches = async context => {
    const res = await axios.get(API_URL).then(serverMatches => {
      // console.log("serverMatches", serverMatches);
      setMatches(serverMatches.data);
      return serverMatches.data;
    });
    return res;
  };

  const { matches } = context;
  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });
  useEffect(() => {
    getCurrentMatches();
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      {currentMatches}
    </div>
  );
}
