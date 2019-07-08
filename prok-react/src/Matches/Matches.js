import React, { useEffect, useState } from "react";
import axios from "axios";
import Match from "./Match/Match";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [showAllMatches, setShowAllMatches] = useState(true);
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [outs, setOuts] = useState(0);

  const incrementScore = function() {
    console.log("setHomeScore", setHomeScore);
    setHomeScore(homeScore + 1);
  };
  // console.log("incrementScore", incrementScore);

  let currentMatches = null;

  const toggleShowAllMatches = matches => {
    // console.log("matches", matches);
    let filteredMatches = matches.filter(
      match => match.matchComplete === false
    );
    // console.log("showAllMatches", showAllMatches);
    setShowAllMatches(!showAllMatches);
    console.log("showAllMatches", showAllMatches);
    console.log("filteredMatches", filteredMatches);
    setMatches(filteredMatches);
    // return filteredMatches;
  };

  if (matches.length > 0) {
    console.log("matches.length", matches.length);
    currentMatches = matches.map(match => {
      return (
        <Match
          key={match._id}
          matchId={match._id}
          match={match}
          awayScore={awayScore}
          setAwayScore={setAwayScore}
          homeScore={homeScore}
          incrementScore={incrementScore}
          balls={balls}
          setBalls={setBalls}
          strikes={strikes}
          setStrikes={setStrikes}
          fouls={fouls}
          setFouls={setFouls}
          outs={outs}
          setOuts={setOuts}
        />
      );
    });
  } else {
    currentMatches = <h2>No Matches</h2>;
  }

  useEffect(() => {
    async function getMatches() {
      const res = await axios("/matches");
      if (showAllMatches) {
        setMatches(res.data);
      }
    }
    getMatches();
  }, [showAllMatches]);

  useEffect(() => {
    document.title = `${matches.length} matches currently`;
  }, [matches, showAllMatches]);

  return (
    <div className="matches">
      <h1>Matches</h1>
      <button>Create Match</button>
      <button onClick={() => toggleShowAllMatches(matches)}>
        Show All Match
      </button>
      {currentMatches}
    </div>
  );
};

export default Matches;
