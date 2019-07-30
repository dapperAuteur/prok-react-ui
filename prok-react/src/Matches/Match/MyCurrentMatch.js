import React, { useContext, useState } from "react";
import KickballContext from "./../../store/kickball-context";

const MyCurrentMatch = props => {
  const context = useContext(KickballContext);

  const updateMatchContext = context.updateMatch;
  let match = props.location.state.match;
  let pitchCount = props.location.state.pitchCount;
  let scoreBoard = props.location.state.scoreBoard;
  const innings = context.matchInitialState.myCurrentMatch.innings;
  const [awayTeamScore, setAwayTeamScore] = useState(scoreBoard.awayTeamScore);
  const [homeTeamScore, setHomeTeamScore] = useState(scoreBoard.homeTeamScore);
  const [balls, setBalls] = useState(pitchCount.balls);
  const [strikes, setStrikes] = useState(pitchCount.strikes);
  const [fouls, setFouls] = useState(pitchCount.fouls);
  const [outs, setOuts] = useState(pitchCount.outs);
  const [currentInning, setCurrentInning] = useState(match.currentInning);
  // console.log("state", state);
  console.log("match", match);
  console.log("currentInning", currentInning);
  console.log("innings", innings);
  match._id = match.matchId;
  match.awayTeamScore = awayTeamScore;
  match.homeTeamScore = homeTeamScore;
  match.balls = balls;
  match.strikes = strikes;
  match.fouls = fouls;
  match.outs = outs;
  console.log("match", match);

  const userKick = () => {
    setBalls(0);
    setStrikes(0);
    setFouls(0);
    match.balls = 0;
    match.strikes = 0;
    match.fouls = 0;
    updateMatch(match);
  };

  const checkForWalksAndOuts = () => {
    console.log("match", match);
    if (fouls > 2 || strikes > 1) {
      setBalls(0);
      setStrikes(0);
      setFouls(0);
      setOuts(outs + 1);
      match.balls = 0;
      match.strikes = 0;
      match.fouls = 0;
      match.outs = outs + 1;
      console.log("outs", outs);
    } else if (balls > 2) {
      setBalls(0);
      setStrikes(0);
      setFouls(0);
      match.balls = 0;
      match.strikes = 0;
      match.fouls = 0;
      console.log("walk");
    }
    if (outs > 1) {
      switch (match.currentInning) {
        // console.log('match', match)
        case "Top 1st":
          console.log("match", match);
          match.currentInning = innings[1];
          break;
        case "Bottom 1st":
          console.log("match", match);
          match.currentInning = innings[2];
          break;
        case "Top 2nd":
          console.log("match", match);
          match.currentInning = innings[3];
          break;
        case "Bottom 2nd":
          console.log("match", match);
          match.currentInning = innings[4];
          break;
        case "Top 3rd":
          console.log("match", match);
          match.currentInning = innings[5];
          break;
        case "Bottom 3rd":
          console.log("match", match);
          match.currentInning = innings[6];
          break;
        case "Top 4th":
          console.log("match", match);
          match.currentInning = innings[7];
          break;
        case "Bottom 4th":
          console.log("match", match);
          match.currentInning = innings[8];
          break;
        case "Top 5th":
          console.log("match", match);
          match.currentInning = innings[9];
          break;
        case "Bottom 5th":
          console.log("match", match);
          match.currentInning = innings[10];
          break;
        case "Top 6th":
          console.log("match", match);
          match.currentInning = innings[11];
          break;
        case "Bottom 6th":
          console.log("match", match);
          match.currentInning = innings[12];
          break;
        default:
          break;
      }
      console.log("outs", outs);
      setBalls(0);
      setStrikes(0);
      setFouls(0);
      setOuts(0);
      match.balls = 0;
      match.strikes = 0;
      match.fouls = 0;
      match.outs = 0;
    }
    console.log("match", match);
    updateMatch(match);
  };

  const updateMatch = async updatedMatch => {
    console.log("updatedMatch", updatedMatch);
    updateMatchContext(updatedMatch);
  };

  const changeHomeTeamScore = async scoreBoard => {
    setHomeTeamScore(homeTeamScore + 1);
    match.homeTeamScore = homeTeamScore + 1;
    return updateMatch(match);
  };

  const changeAwayTeamScore = async scoreBoard => {
    setAwayTeamScore(awayTeamScore + 1);
    match.awayTeamScore = awayTeamScore + 1;
    return updateMatch(match);
  };

  const changeBalls = async scoreBoard => {
    setBalls(balls + 1);
    match.balls = balls + 1;
    // return updateMatch(match);
    return checkForWalksAndOuts();
  };

  const changeStrikes = async scoreBoard => {
    setStrikes(strikes + 1);
    match.strikes = strikes + 1;
    // return updateMatch(match);
    return checkForWalksAndOuts();
  };

  const changeFouls = async scoreBoard => {
    setFouls(fouls + 1);
    match.fouls = fouls + 1;
    // return updateMatch(match);
    return checkForWalksAndOuts();
  };

  const changeOuts = async scoreBoard => {
    setOuts(outs + 1);
    match.outs = outs + 1;
    // return updateMatch(match);
    return checkForWalksAndOuts();
  };

  return (
    <div className="my-current-match">
      <h4>MyCurrentMatch</h4>
      <button className="stat" onClick={() => userKick()}>
        Kick
      </button>
      <h3>{match.currentInning}</h3>
      <div className="score-board">
        <button className="score" onClick={() => changeAwayTeamScore()}>
          away: {awayTeamScore}
        </button>
        <button className="score" onClick={() => changeHomeTeamScore()}>
          home: {homeTeamScore}
        </button>
      </div>
      <div className="pitch-count">
        <h3>PitchCount</h3>
        <button className="stat" onClick={() => changeBalls()}>
          Balls: {balls}
        </button>
        <button className="stat" onClick={() => changeStrikes()}>
          Strikes: {strikes}
        </button>
        <button className="stat" onClick={() => changeFouls()}>
          Fouls: {fouls}
        </button>
        <button className="stat" onClick={() => changeOuts()}>
          Outs: {outs}
        </button>
      </div>
    </div>
  );
};

export default MyCurrentMatch;
