import React, { useContext, useState } from "react";
import axios from "axios";
import KickballContext from "./../../store/kickball-context";

const API_URL = "/matches";

const MyCurrentMatch = props => {
  const context = useContext(KickballContext);
  console.log("props", props);
  const updateMatchContext = context.updateMatch;
  // const [state, setstate] = useState({});
  let match = props.location.state.match;
  let pitchCount = props.location.state.pitchCount;
  let scoreBoard = props.location.state.scoreBoard;
  const [awayTeamScore, setAwayTeamScore] = useState(scoreBoard.awayTeamScore);
  const [homeTeamScore, setHomeTeamScore] = useState(scoreBoard.homeTeamScore);
  const [balls, setBalls] = useState(pitchCount.balls);
  const [strikes, setStrikes] = useState(pitchCount.strikes);
  const [fouls, setFouls] = useState(pitchCount.fouls);
  const [outs, setOuts] = useState(pitchCount.outs);
  // console.log("state", state);
  console.log("match", match);
  // console.log("homeTeamScore", homeTeamScore);
  match.awayTeamScore = awayTeamScore;
  match.homeTeamScore = homeTeamScore;
  match.balls = balls;
  match.strikes = strikes;
  match.fouls = fouls;
  match.outs = outs;

  const updateMatch = async updatedMatch => {
    // const res = await axios.patch(
    //   `${API_URL}/${updatedMatch._id}`,
    //   updatedMatch
    // );
    // console.log("res", res);
    // add updated match to session or localStorage
    updatedMatch._id = updatedMatch.matchId;
    console.log("updatedMatch", updatedMatch);
    updateMatchContext(updatedMatch);
  };

  const changeHomeTeamScore = async scoreBoard => {
    setHomeTeamScore(homeTeamScore + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   homeTeamScore: homeTeamScore + 1
    // };
    match.homeTeamScore = homeTeamScore + 1;
    return updateMatch(match);
  };

  const changeAwayTeamScore = async scoreBoard => {
    setAwayTeamScore(awayTeamScore + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   awayTeamScore: awayTeamScore + 1
    // };
    match.awayTeamScore = awayTeamScore + 1;
    return updateMatch(match);
  };

  const changeBalls = async scoreBoard => {
    setBalls(balls + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   balls: balls + 1
    // };
    match.balls = balls + 1;
    return updateMatch(match);
  };

  const changeStrikes = async scoreBoard => {
    setStrikes(strikes + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   strikes: strikes + 1
    // };
    match.strikes = strikes + 1;
    return updateMatch(match);
  };

  const changeFouls = async scoreBoard => {
    setFouls(fouls + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   fouls: fouls + 1
    // };
    match.fouls = fouls + 1;
    return updateMatch(match);
  };

  const changeOuts = async scoreBoard => {
    setOuts(outs + 1);
    // let updatedMatch = {
    //   _id: match.matchId,
    //   outs: outs + 1
    // };
    match.outs = outs + 1;
    return updateMatch(match);
  };

  return (
    <div className="my-current-match">
      <h4>MyCurrentMatch</h4>
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
