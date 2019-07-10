import React, { useEffect, useState } from "react";
import axios from "axios";
import classnames from "classnames";

axios.defaults.withCredentials = true;
const API_URL_MATCHES = "/matches";
const API_URL_PLAYERS = "/players";
const API_URL_TEAMS = "/teams";

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
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  console.log("teams", teams);

  const validateForm = e => {
    e.preventDefault();
    if (homeTeam === awayTeam) {
      console.log(
        `away team: ${awayTeam} can NOT be the same as home team: ${homeTeam}`
      );
    }
    if (homeTeam === "" || awayTeam === "" || scoreKeeper === "") {
      console.log("fields cannot be blank");
    }
    if (
      homeTeam !== awayTeam &&
      homeTeam !== "" &&
      awayTeam !== "" &&
      scoreKeeper !== ""
    ) {
      createNewMatch(e);
    }
    console.log("scoreKeeper", scoreKeeper);
    return false;
  };

  const submitMatch = async newMatch => {
    console.log("newMatch", newMatch);
    newMatch.withCredentials = true;
    const res = await axios.post(API_URL_MATCHES, newMatch);
    console.log("res", res);
    return res;
  };

  const createNewMatch = e => {
    e.preventDefault();
    // console.log("createNewMatch");
    // console.log("scoreKeeper", scoreKeeper);
    // console.log("homeTeam", homeTeam);
    // console.log("awayTeam", awayTeam);
    const newMatch = { scoreKeeper, homeTeam, awayTeam };
    console.log("newMatch inside createNewMatch()", newMatch);
    submitMatch(newMatch);
  };

  useEffect(() => {
    async function getPlayers() {
      const res = await axios(API_URL_PLAYERS);
      // console.log("res", res);
      setPlayers(res.data);
    }
    async function getTeams() {
      const res = await axios(API_URL_TEAMS);
      // console.log("res", res);
      setTeams(res.data);
    }
    getPlayers();
    getTeams();
  }, []);

  return (
    <div className="match">
      <h1>Create Match</h1>
      <button>Use Existing Teams</button>
      <button>Create New Team</button>
      <div className="form">
        <form onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="choose score keeper">score keeper</label>
            <select
              name="scoreKeeper"
              id="scoreKeeper"
              key="scoreKeeper"
              value={scoreKeeper}
              onChange={e => setScoreKeeper(e.target.value)}
            >
              {players.map(player => (
                <option key={player._id} value={player._id}>
                  {player.nickname}
                </option>
              ))}
            </select>
            {errors.scoreKeeper && (
              <div className="invalid-feedback">{errors.scoreKeeper}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="choose away team">away team</label>
            <select
              name="awayTeam"
              id="awayTeam"
              key="awayTeam"
              value={awayTeam}
              onChange={e => setAwayTeam(e.target.value)}
            >
              {teams.map(team => (
                <option key={team._id} value={team._id}>
                  {team.teamName}
                </option>
              ))}
            </select>
            {errors.awayTeam && (
              <div className="invalid-feedback">{errors.awayTeam}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="choose home team">home team</label>
            <select
              name="homeTeam"
              id="homeTeam"
              key="homeTeam"
              value={homeTeam}
              onChange={e => setHomeTeam(e.target.value)}
            >
              {teams.map(team => (
                <option key={team._id} value={team._id}>
                  {team.teamName}
                </option>
              ))}
            </select>
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
