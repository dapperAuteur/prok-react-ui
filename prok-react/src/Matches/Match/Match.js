import React, { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import PitchCount from "./PitchCount";

const Match = props => {
  console.log("props", props);

  const match = {
    matchId: props.match._id,
    scoreKeeper: props.match.scoreKeeper,
    currentInning: props.match.currentInning
    // awayTeamName: props.awayTeamObj.teamName,
    // homeTeamName: props.homeTeamObj.teamName
  };
  console.log("props.awayTeamObj", props.awayTeamObj);
  console.log("match", match);

  const scoreBoard = {
    homeTeam: props.match.homeTeam,
    awayTeam: props.match.awayTeam,
    homeTeamScore: props.match.homeTeamScore,
    awayTeamScore: props.match.awayTeamScore
  };

  const pitchCount = {
    balls: props.match.balls,
    strikes: props.match.strikes,
    fouls: props.match.fouls,
    outs: props.match.outs
  };
  // console.log("scoreBoard", scoreBoard);
  // console.log("pitchCount", pitchCount);

  return (
    <div className="match">
      <h1>Match</h1>
      <ScoreBoard scoreBoard={scoreBoard} match={match} />
      <PitchCount pitchCount={pitchCount} match={match} />
    </div>
  );
};

export default Match;
