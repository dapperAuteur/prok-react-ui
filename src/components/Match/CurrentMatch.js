import React, { useContext, useEffect, useState } from "react";
import MatchContext from "../../store/match-context";
import { Link } from "react-router-dom";

export default function CurrentMatch(props) {
  const context = useContext(MatchContext);
  console.log("context", context);
  console.log("props 4", props.props);
  const thisMatch = props.props;
  console.log("thisMatch", thisMatch);
  const [hName, sethName] = useState(props.props.homeTeamName);
  const [homeScore, setHomeScore] = useState(0);
  const [aName, setaName] = useState(props.props.awayTeamName);
  const [awayScore, setAwayScore] = useState(0);
  const [currentInning, setInning] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [outs, setOuts] = useState(0);

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

  useEffect(() => {
    return () => {};
  });
  return (
    <div>
      <h1>ProKickballer</h1>
      <div>
        <Link to={{ pathname: "/match", state: props.props }}>
          <h2>Game Status</h2>
        </Link>

        <h3>Inning: {INNINGS[currentInning]}</h3>
        <button>Balls: {balls}</button>
        <button>Strikes: {strikes}</button>
        <button>Fouls: {fouls}</button>
        <button>Outs: {outs}</button>
      </div>
      <div>
        <button>
          {hName}: {homeScore}
        </button>
        <button>
          {aName}: {awayScore}
        </button>
      </div>
    </div>
  );
}
