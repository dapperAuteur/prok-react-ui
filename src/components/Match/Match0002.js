import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import MatchContext from "./../../store/match-context";
import { matchInitialState } from "../../store/DefaultStates";

export default function Match002(props) {
  const context = useContext(MatchContext);
  let match = matchInitialState;
  const [thisMatch, setMatch] = useState(match);
  console.log("Match 6 context", context);
  console.log("Match 7 props", props);
  console.log("match", match);

  const [hName, sethName] = useState("Home Team");
  // const [homeState, setHomeState] = useState(0);
  const [aName, setaName] = useState("Away Team");
  // const [awayState, setAwayState] = useState(0);
  // const [currentInning, setInning] = useState(0);
  // const [balls, setBalls] = useState(0);
  // const [strikes, setStrikes] = useState(0);
  // const [fouls, setFouls] = useState(0);
  // const [outs, setOuts] = useState(0);

  // const {
  //   matches,
  //   innings,
  //   incrementAwayScore,
  //   incrementHomeScore,
  //   updateMatch
  // } = context;
  let {
    // incrementAwayScore,
    // decrementAwayScore,
    // incrementHomeScore,
    // decrementHomeScore,
    awayTeamScore,
    balls,
    currentInning,
    fouls,
    homeTeamScore,
    outs,
    strikes
  } = match.match;
  console.log("incrementAwayScore", context.incrementAwayScore);
  // console.log(incrementAwayScore());s

  const INNINGS = [
    "Top 1st",
    "Bottom 1st",
    "Top 2nd",
    "Bottom 2nd",
    "Top 3rd",
    "Bottom 3rd",
    "Top 4th",
    "Bottom 4th",
    "Top 5th",
    "Bottom 5th",
    "Top 6th",
    "Bottom 6th",
    "MATCH OVER"
  ];
  const setHomeScore = () => {
    return homeTeamScore + 1;
  };

  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <h2>Game Status</h2>
        <h3>Inning: {INNINGS[currentInning]}</h3>
      </div>
      <div>
        <h3>{hName}</h3>
        <button onClick={homeTeamScore => context.incrementHomeScore}>
          Score: {homeTeamScore}
        </button>
      </div>
    </div>
  );
}
