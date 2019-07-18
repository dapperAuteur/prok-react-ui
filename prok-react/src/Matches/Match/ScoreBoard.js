import React from "react";

const ScoreBoard = scoreBoard => {
  // console.log("scoreBoard", scoreBoard);
  let {
    homeTeam,
    awayTeam,
    homeTeamScore,
    awayTeamScore
  } = scoreBoard.scoreBoard;

  let matchId = scoreBoard.match.matchId;
  // console.log("scoreBoard.match", scoreBoard.match);

  return (
    <div className="score-board">
      <h3>Score Board {matchId}</h3>
      <span className="score">
        {homeTeam}: {homeTeamScore}
      </span>
      <span className="score">
        {awayTeam}: {awayTeamScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
