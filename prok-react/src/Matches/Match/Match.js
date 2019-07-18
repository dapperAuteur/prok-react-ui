import React from "react";
import { Link } from "react-router-dom";
import ScoreBoard from "./ScoreBoard";
import PitchCount from "./PitchCount";

const Match = props => {
  // console.log("props", props);

  const match = {
    matchId: props.match._id,
    scoreKeeper: props.match.scoreKeeper,
    currentInning: props.match.currentInning,
    matchComplete: props.match.matchComplete
  };

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

  return (
    <Link
      to={{
        pathname: "/my-current/match",
        state: { scoreBoard, match, pitchCount }
      }}
      className="match-link"
    >
      <div className={match.matchComplete ? "match" : "match currentlyPlaying"}>
        <ScoreBoard scoreBoard={scoreBoard} match={match} />
        <PitchCount pitchCount={pitchCount} match={match} />
      </div>
    </Link>
  );
};

export default Match;
