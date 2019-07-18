import React, { useState } from "react";
import axios from "axios";

const API_URL = "/matches";

const MyCurrentMatch = props => {
  // console.log("props", props);
  // const [state, setstate] = useState({});
  let match = props.location.state.match;
  // let pitchCount = props.location.state.pitchCount;
  let scoreBoard = props.location.state.scoreBoard;
  const [awayTeamScore, setAwayTeamScore] = useState(scoreBoard.awayTeamScore);
  const [homeTeamScore, setHomeTeamScore] = useState(scoreBoard.homeTeamScore);
  // console.log("state", state);
  // console.log("match", match);
  console.log("homeTeamScore", homeTeamScore);

  const changeHomeTeamScore = async scoreBoard => {
    setHomeTeamScore(homeTeamScore + 1);
    // console.log("homeTeamScore", homeTeamScore);
    let updatedMatch = {
      _id: match.matchId,
      homeTeamScore: homeTeamScore + 1
    };
    // console.log("updatedMatch", updatedMatch);
    const res = await axios.patch(
      `${API_URL}/${updatedMatch._id}`,
      updatedMatch
    );
    console.log("res", res);
    return res;
  };

  const changeAwayTeamScore = async scoreBoard => {
    setAwayTeamScore(awayTeamScore + 1);
    let updatedMatch = {
      _id: match.matchId,
      awayTeamScore: awayTeamScore + 1
    };
    const res = await axios.patch(
      `${API_URL}/${updatedMatch._id}`,
      updatedMatch
    );
    return res;
  };

  return (
    <div>
      <h4>MyCurrentMatch</h4>
      <h3>{match.currentInning}</h3>
      <div>
        <button onClick={() => changeAwayTeamScore()}>
          away: {awayTeamScore}
        </button>
        <button onClick={() => changeHomeTeamScore()}>
          home: {homeTeamScore}
        </button>
      </div>
    </div>
  );
};

export default MyCurrentMatch;
