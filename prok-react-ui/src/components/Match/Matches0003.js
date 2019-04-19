import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CurrentMatch from "./CurrentMatch";
import MatchContext from "./../../store/match-context";

const API_URL = "/matches";

const Matches0003 = props => {
  const context = useContext(MatchContext);
  const matches = context.matches;
  // const [matches, setMatches] = useState(matches);

  console.log("props", props);
  console.log("context", context);
  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });

  // useEffect(() => {
  //   axios.get(API_URL).then(result => {
  //     console.log("result", result);
  //     const matchesAPI = result.data;
  //     console.log("matchesAPI", matchesAPI);
  //     setMatches(matchesAPI);
  //   });
  // }, []);
  return <div>Matches{currentMatches}</div>;
};

export default Matches0003;
