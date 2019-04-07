import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import MatchContext from "./../../store/match-context";
import { matchInitialState } from "../../store/DefaultStates";
import "./Match.css";
import KickballTicker from "../Ticker/KickballTicker";

export default function Match002(props) {
  const context = useContext(MatchContext);
  // let match = matchInitialState.match;
  const [thisMatch, setMatch] = useState(match);
  // console.log("Match 6 context", context);
  // console.log("Match 7 props", props);
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

  const matchTitle = `${awayTeamScore} - ${homeTeamScore}`;

  useEffect(() => {
    if (balls === 4) {
      console.log(balls, " balls, now walk");
      resetCount();
    }
  }, [balls]);

  useEffect(() => {
    if (strikes === 3) {
      console.log("strikes");
      incrementOuts();
      resetCount();
    }
  }, [strikes]);

  useEffect(() => {
    if (fouls === 4) {
      console.log(" fouls");
      incrementOuts();
      resetCount();
    }
  }, [fouls]);

  useEffect(() => {
    if (outs === 3) {
      console.log("outs", outs);
      incrementOuts();
      resetCount();
    }
  }, [outs]);

  useEffect(() => {
    document.title = matchTitle;
  }, []);

  return (
    <div className="single-match">
      <h1 className="match-title">ProKickballer</h1>
      <div className="stats">
        <h2 className="match-title">{matchTitle}</h2>
        <h3 className="match-title">Inning: {innings[currentInning]}</h3>
        <button onClick={incrementBalls}>Balls: {balls}</button>
        <button onClick={incrementStrikes}>Strikes: {strikes}</button>
        <button onClick={incrementFouls}>Fouls: {fouls}</button>
        <button onClick={incrementOuts}>Outs: {outs}</button>
      </div>
      <div className="score-board">
        <div className="score">
          <button className="score-button" onClick={incrementHomeScore}>
            <h3>{"Home Team"}</h3>Score: {homeTeamScore}
          </button>
        </div>
        <div className="score">
          <button className="score-button" onClick={incrementAwayScore}>
            <h3>{"Away Team"}</h3>Score: {awayTeamScore}
          </button>
        </div>
      </div>
      <KickballTicker />
    </div>
  );
}
