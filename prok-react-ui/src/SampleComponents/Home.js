import React, { useEffect, useState } from "react";

export default function Home() {
  const [homeState, setHomeState] = useState(0);
  const [awayState, setAwayState] = useState(0);
  const [currentInning, setInning] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [outs, setOuts] = useState(0);

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

  function resetMatch() {
    setBalls(0);
    setStrikes(0);
    setFouls(0);
  }

  function incrementBalls() {
    setBalls(balls + 1);
    if (balls === 3) {
      console.log("balls, now walk", balls);
      resetMatch();
    }
  }

  function incrementStrikes() {
    setStrikes(strikes + 1);
    if (strikes === 2) {
      console.log("strikes, you're out", strikes);
      resetMatch();
      incrementOuts();
    }
  }

  function incrementFouls() {
    setFouls(fouls + 1);
    if (fouls === 3) {
      console.log("fouls, you're out", fouls);
      resetMatch();
      incrementOuts();
    }
  }

  function incrementOuts() {
    setOuts(outs + 1);
    resetMatch();
    if (outs === 2) {
      setInning(currentInning + 1);
      setOuts(0);
    }
  }

  useEffect(() => {
    document.title = `The score is ${homeState} vs ${awayState}`;
  });

  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <h2>Game Status</h2>
        <h3>Inning: {INNINGS[currentInning]}</h3>
        <button onClick={incrementBalls}>Balls: {balls}</button>
        <button onClick={incrementStrikes}>Strikes: {strikes}</button>
        <button onClick={incrementFouls}>Fouls: {fouls}</button>
        <button onClick={incrementOuts}>Outs: {outs}</button>
      </div>
      <div>
        <h3>Home Team</h3>
        <button onClick={() => setHomeState(homeState + 1)}>
          Score: {homeState}
        </button>
      </div>
      <div>
        <h3>Away Team</h3>
        <button onClick={() => setAwayState(awayState + 1)}>
          Score: {awayState}
        </button>
      </div>
    </div>
  );
}
