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
  console.log("match", match);
  const {
    match,
    incrementHomeScore,
    incrementAwayScore,
    incrementBalls,
    incrementStrikes,
    incrementFouls,
    incrementOuts,
    incrementInning
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
  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <h2>Game Status</h2>
      </div>
      <div>
        <h3>{"Home Team"}</h3>
        <button onClick={context.incrementHomeScore}>
          Score: {homeTeamScore}
        </button>
      </div>
      <div>
        <h3>{"Away Team"}</h3>
        <button onClick={context.incrementAwayScore}>
          Score: {awayTeamScore}
        </button>
      </div>
    </div>
  );
}
