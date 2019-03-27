import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import MatchContext from "./../../store/match-context";
import { matchInitialState } from "../../store/DefaultStates";

export default function Match002(props) {
  const context = useContext(MatchContext);
  // let match = matchInitialState.match;
  const [thisMatch, setMatch] = useState(match);
  console.log("Match 6 context", context);
  console.log("Match 7 props", props);
  const {
    match,
    incrementHomeScore,
    incrementAwayScore,
    incrementBalls,
    incrementStrikes,
    incrementFouls,
    incrementOuts,
    incrementInning,
    resetCount
  } = context;

  const {
    homeTeamScore,
    awayTeamScore,
    currentInning,
    innings,
    balls,
    strikes,
    fouls,
    outs
  } = match;
  // useEffect(() => {
  //   return (
  //     () => {
  //       effect;
  //     },
  //     [input]
  //   );
  // });

  useEffect(() => {
    return () => {
      document.title = `Home Team: ${homeTeamScore} vs Away Team: ${awayTeamScore}`;
      if (balls === 3) {
        console.log(balls, " balls, now walk");
        resetCount();
      }
      if (fouls === 3 || strikes === 2) {
        console.log("strikes or fouls");
        incrementOuts();
        // resetCount();
      }
      if (outs === 2) {
        console.log("outs", outs);
        incrementInning();
      }
    };
  });

  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <h2>Game Status</h2>
        <h3>Inning: {innings[currentInning]}</h3>
        <button onClick={incrementBalls}>Balls: {balls}</button>
        <button onClick={incrementStrikes}>Strikes: {strikes}</button>
        <button onClick={incrementFouls}>Fouls: {fouls}</button>
        <button onClick={incrementOuts}>Outs: {outs}</button>
      </div>
      <div>
        <h3>{"Home Team"}</h3>
        <button onClick={incrementHomeScore}>Score: {homeTeamScore}</button>
      </div>
      <div>
        <h3>{"Away Team"}</h3>
        <button onClick={incrementAwayScore}>Score: {awayTeamScore}</button>
      </div>
    </div>
  );
}
