import React from "react";

const ScoreBoard = scoreBoard => {
  console.log("scoreBoard", scoreBoard);
  let {
    homeTeam,
    awayTeam,
    homeTeamScore,
    awayTeamScore,
    setAwayScore,
    incrementScore
  } = scoreBoard.scoreBoard;

  let matchId = scoreBoard.match.matchId;
  // console.log("scoreBoard.match", scoreBoard.match);

  return (
    <div className="score-board">
      <h3>Score Board {matchId}</h3>
      <button className="score" onClick={() => incrementScore()}>
        {homeTeam}: {homeTeamScore}
      </button>
      <button className="score" onClick={() => setAwayScore(awayTeamScore + 1)}>
        {awayTeam}: {awayTeamScore}
      </button>
    </div>
  );
};

export default ScoreBoard;
