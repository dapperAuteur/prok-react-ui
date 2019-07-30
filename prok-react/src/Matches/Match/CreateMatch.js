import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import classnames from "classnames";
import KickballContext from "./../../store/kickball-context";

axios.defaults.withCredentials = true;

const errors = {};

const CreateMatch = props => {
  console.log("props", props);
  const context = useContext(KickballContext);
  console.log("context", context);
  const createMatch = context.createMatch;
  // const teams = context.

  let scoreKeeper;
  if (typeof Storage !== "undefined") {
    if (localStorage.hasOwnProperty("currentUser")) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      scoreKeeper = currentUser.user._id;
    }
  }
  const defaultTeams = [
    {
      _id: "0",
      teamName: "Choose A Team"
    },
    {
      _id: "5c9a9e2be6814f122a1af322",
      teamName: "Away Team"
    },
    {
      _id: "5c9a9ef3e6814f122a1af324",
      teamName: "Home Team"
    }
  ];

  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [teams, setTeams] = useState(defaultTeams);

  const validateForm = e => {
    e.preventDefault();
    console.log("awayTeam", awayTeam);
    console.log("homeTeam", homeTeam);
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
      return createNewMatch(e);
    }
    console.log("bad form");
    return false;
  };

  // const submitMatch = async newMatch => {
  //   console.log("newMatch", newMatch);
  //   newMatch.withCredentials = true;
  //   createMatch(scoreKeeper, newMatch);
  // };

  const createNewMatch = e => {
    e.preventDefault();
    const newMatch = { scoreKeeper, homeTeam, awayTeam, withCredentials: true };
    console.log("newMatch inside createNewMatch()", newMatch);
    // newMatch.withCredentials = true;
    createMatch(scoreKeeper, newMatch);
    // submitMatch(newMatch);
    props.history.push("/my-current/created-match", newMatch);
  };

  return (
    <div className="match">
      <h1>Create Match</h1>
      <button>Use Existing Teams</button>
      <button>Create New Team</button>
      <div className="form">
        <form onSubmit={validateForm}>
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
