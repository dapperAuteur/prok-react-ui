import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MatchContext from "../../store/match-context";
import CurrentMatch from "./CurrentMatch";

const API_URL = "//localhost:8080/api/ver0001/matches";
// const API_URL = "https://react-shopping-list.firebaseio.com/matches.json";

// let matches = [];
// let matchData = {};
// const getMatches = async function() {
//   const resMatches = await axios
//     .get(API_URL)
//     .then(function(res) {
//       console.log("res 13", res);
//       matchData = res;
//     })
//     .catch(function(err) {
//       console.log("err 17", err);
//     });
// };

// setTimeout(() => {
//   getMatches();
// }, 5000);
// let a = await getMatches();
// console.log("a", a);

// matches = matchData.data;
// console.log("matches 26", matches);

export default function Matches(props) {
  console.log("props", props);
  // const [matches, setMatches] = useState([]);
  const context = useContext(MatchContext);
  let listOfMatches = [];
  console.log("context", context);
  const setMatches = context.setMatches;
  const getCurrentMatches = async context => {
    const res = await axios.get(API_URL).then(serverMatches => {
      console.log("serverMatches", serverMatches);
      setMatches(serverMatches.data);
      listOfMatches = serverMatches.data;
      return serverMatches.data;
    });
    return res;
  };
  // const listOfMatches = getCurrentMatches();
  console.log("listOfMatches", listOfMatches);

  const { matches } = context;
  console.log("matches", matches);
  const currentMatches = matches.map(match => {
    return <CurrentMatch props={match} key={match._id} />;
  });
  console.log("matches", matches);
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
