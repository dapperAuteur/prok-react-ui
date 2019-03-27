import React, { useEffect, useState } from "react";
import axios from "axios";
// import { create } from "domain";
const API_URL = "//localhost:8080/api/ver0001/matches";

// const API_URL = "https://react-shopping-list.firebaseio.com/matches.json";
/**
 * Firebase RT DB
 * https://react-shopping-list.firebaseio.com/
 */

export default function Match0001() {
  const [hName, sethName] = useState("Home Team");
  const [homeState, setHomeState] = useState(0);
  const [aName, setaName] = useState("Away Team");
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
  }

  function incrementStrikes() {
    setStrikes(strikes + 1);
  }

  function incrementFouls() {
    setFouls(fouls + 1);
  }

  function incrementOuts() {
    setOuts(outs + 1);
    resetMatch();
  }

  const createMatch = async function(match) {
    const resMatch = await axios
      .post(API_URL, match)
      .then(function(res) {
        console.log("res 60", res);
      })
      .catch(function(err) {
        console.log("err 63", err);
      });
    console.log("resMatch 65", resMatch);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const match = {
      homeTeamScore: homeState,
      awayTeamScore: awayState,
      currentInning: "Top 1st",
      balls,
      strikes,
      fouls,
      outs
    };
    console.log("match 79", match);
    const newMatch = createMatch(match);
    console.log("newMatch 81", newMatch);
  }

  // function handleChange(e) {
  //   console.log("hName", hName);
  //   sethName({ [e.target.name]: e.target.value });
  // }

  useEffect(() => {
    document.title = `Home: ${homeState} vs Away: ${awayState}`;
    if (fouls === 4 || strikes === 3) {
      resetMatch();
      incrementOuts();
    }
    if (outs === 3) {
      setInning(currentInning + 1);
      setOuts(0);
    }
    if (balls === 4) {
      console.log("balls, now walk", balls);
      resetMatch();
    }
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
        <h3>{hName}</h3>
        {/* <input
            id="home-team-name"
            key="hName"
            type="text"
            name="hName"
            className="form-control"
            autoComplete="off"
            value={hName}
            onChange={handleChange}
          /> */}
        <button onClick={() => setHomeState(homeState + 1)}>
          Score: {homeState}
        </button>
      </div>
      <div>
        <h3>{aName}</h3>
        <button onClick={() => setAwayState(awayState => awayState + 1)}>
          Score: {awayState}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
