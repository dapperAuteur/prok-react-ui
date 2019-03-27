import React, { useContext, useState, useEffect } from "react";
import MatchContext from "./../../store/match-context";

export default function Match(props) {
  const context = useContext(MatchContext);
  console.log("Match 6 context", context);
  console.log("Match 7 props", props);
  const [hName, sethName] = useState("Home Team");
  // const [homeState, setHomeState] = useState(0);
  const [aName, setaName] = useState("Away Team");
  // const [awayState, setAwayState] = useState(0);
  // const [currentInning, setInning] = useState(0);
  // const [balls, setBalls] = useState(0);
  // const [strikes, setStrikes] = useState(0);
  // const [fouls, setFouls] = useState(0);
  // const [outs, setOuts] = useState(0);

  const {
    match,
    matches,
    innings,
    incrementAwayScore,
    incrementHomeScore,
    updateMatch
  } = context;
  let {
    awayTeamScore,
    balls,
    currentInning,
    fouls,
    homeTeamScore,
    outs,
    strikes
  } = match;

  const INNINGS = [
    "Top 1st",
    "Bottom 1st",
    "Top 2nd",
    "Bottom 2nd",
    "Top 3rd",
    "Bottom 3rd",
    "Top 4th",
    "Bottom 4th",
    "Top 5th",
    "Bottom 5th",
    "Top 6th",
    "Bottom 6th",
    "MATCH OVER"
  ];

  const setAwayScore = () => {
    return awayTeamScore + 1;
  };
  const setHomeScore = () => {
    return homeTeamScore + 1;
  };

  function resetMatch() {
    balls = 0;
    strikes = 0;
    fouls = 0;
  }

  function incrementBalls() {
    return balls++;
  }

  function incrementStrikes() {
    return strikes++;
  }

  function incrementFouls() {
    return fouls++;
  }

  function incrementOuts() {
    outs++;
    return resetMatch();
  }

  function handleSubmit() {}

  // useEffect(() => {
  //   document.title = `Home: ${homeTeamScore} vs Away: ${awayTeamScore}`;
  //   if (fouls === 4 || strikes === 3) {
  //     resetMatch();
  //     incrementOuts();
  //   }
  //   if (outs === 3) {
  //     currentInning++;
  //     outs = 0;
  //   }
  //   if (balls === 4) {
  //     console.log("balls, now walk", balls);
  //     resetMatch();
  //   }
  // });

  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <h2>Game Status</h2>
        <h3>Inning: {INNINGS[currentInning]}</h3>
        <button onClick={() => context.balls++}>Balls: {balls}</button>
        <button onClick={incrementStrikes}>Strikes: {strikes}</button>
        <button onClick={incrementFouls}>Fouls: {fouls}</button>
        <button onClick={incrementOuts}>Outs: {outs}</button>
      </div>
      <div>
        <h3>{hName}</h3>
        <button onClick={() => incrementHomeScore()}>
          Score: {homeTeamScore}
        </button>
      </div>
      <div>
        <h3>{aName}</h3>
        <button onClick={() => incrementAwayScore()}>
          Score: {awayTeamScore}
        </button>
      </div>
    </div>
  );
}