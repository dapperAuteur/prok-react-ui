import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";

axios.defaults.withCredentials = true;
const API_URL = "/auth/sign-in";

const errors = {};

// let newMatch = {
//   matchId: "",
//   scoreKeeper: "the commish",
//   currentInning: "Top 1st",
//   homeTeam: "homeTeam",
//   awayTeam: "awayTeam",
//   homeTeamScore: 0,
//   awayTeamScore: 0,
//   balls: 0,
//   strikes: 0,
//   fouls: 0,
//   outs: 0
// };

const CreateMatch = () => {
  const [scoreKeeper, setScoreKeeper] = useState("");
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  // const [homeTeamScore, setHomeTeamScore] = useState(0);
  // const [awayTeamScore, setAayTeamScore] = useState(0);
  // const [balls, setBalls] = useState(0);
  // const [strikes, setStrikes] = useState(0);
  // const [fouls, setFouls] = useState(0);
  // const [outs, setOuts] = useState(0);

  const submitMatch = newMatch => {
    console.log("newMatch", newMatch);
  };

  const createNewMatch = e => {
    e.preventDefault();
    console.log("createNewMatch");
    console.log("scoreKeeper", scoreKeeper);
    console.log("homeTeam", homeTeam);
    console.log("awayTeam", awayTeam);
    const newMatch = { scoreKeeper, homeTeam, awayTeam };
    console.log("newMatch inside createNewMatch()", newMatch);
    submitMatch(newMatch);
  };

  return (
    <div className="match">
      <h1>Create Match</h1>
      <button>Use Existing Teams</button>
      <button>Create New Team</button>
      <div className="form">
        <form onSubmit={createNewMatch}>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-valid": errors.scoreKeeper
              })}
              placeholder="select score keeper"
              name="scoreKeeper"
              autoComplete="off"
              onChange={e => setScoreKeeper(e.target.value)}
              value={scoreKeeper}
            />
            {errors.scoreKeeper && (
              <div className="invalid-feedback">{errors.scoreKeeper}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-valid": errors.awayTeam
              })}
              placeholder="select away team"
              name="awayTeam"
              onChange={e => setAwayTeam(e.target.value)}
              value={awayTeam}
            />
            {errors.awayTeam && (
              <div className="invalid-feedback">{errors.awayTeam}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-valid": errors.homeTeam
              })}
              placeholder="select home team"
              name="homeTeam"
              onChange={e => setHomeTeam(e.target.value)}
              value={homeTeam}
            />
            {errors.homeTeam && (
              <div className="invalid-feedback">{errors.homeTeam}</div>
            )}
          </div>
          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </div>
    </div>
  );
};

export default CreateMatch;
