import React, { useEffect, useState } from "react";
import axios from "axios";
import openSocket from "socket.io-client";
import Match from "./Match/Match";

const API_URL = "http://localhost:8080";
const API_URL_MATCHES = "/matches";
const API_URL_TEAMS = "/teams";
const socket = openSocket(API_URL);

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [showAllMatches, setShowAllMatches] = useState(true);
  const [teams, setTeams] = useState([]);
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [outs, setOuts] = useState(0);

  const incrementScore = function() {
    console.log("setHomeScore", setHomeScore);
    setHomeScore(homeScore + 1);
  };
  // console.log("incrementScore", incrementScore);

  const getMatches = async function() {
    const res = await axios(API_URL_MATCHES);
    if (showAllMatches) {
      setMatches(res.data);
    }
    console.log("getMatches");
  };

  let currentMatches = null;

  const toggleShowAllMatches = matches => {
    // console.log("matches", matches);
    let filteredMatches = matches.filter(
      match => match.matchComplete === false
    );
    // console.log("showAllMatches", showAllMatches);
    setShowAllMatches(!showAllMatches);
    console.log("showAllMatches", showAllMatches);
    console.log("filteredMatches", filteredMatches);
    setMatches(filteredMatches);
    // return filteredMatches;
  };

  if (matches.length > 0) {
    // console.log("matches.length", matches.length);
    currentMatches = matches.map(match => {
      const awayTeamObj = teams.find(team => {
        // console.log("team", team);
        // console.log("match", match);
        return match.awayTeam === team._id;
      });
      const homeTeamObj = teams.find(team => {
        return match.homeTeam === team._id;
      });
      // console.log("awayTeamObj", awayTeamObj);
      return (
        <Match
          key={match._id}
          matchId={match._id}
          awayTeamObj={awayTeamObj}
          homeTeamObj={homeTeamObj}
          match={match}
          awayScore={awayScore}
          setAwayScore={setAwayScore}
          homeScore={homeScore}
          incrementScore={incrementScore}
          balls={balls}
          setBalls={setBalls}
          strikes={strikes}
          setStrikes={setStrikes}
          fouls={fouls}
          setFouls={setFouls}
          outs={outs}
          setOuts={setOuts}
        />
      );
    });
  } else {
    currentMatches = <h2>No Matches</h2>;
  }

  useEffect(() => {
    // async function getMatches() {
    //   const res = await axios(API_URL_MATCHES);
    //   if (showAllMatches) {
    //     setMatches(res.data);
    //   }
    // }
    getMatches();
  }, [showAllMatches]);

  useEffect(() => {
    document.title = `${matches.length} matches currently`;
  }, [matches, showAllMatches]);

  useEffect(() => {
    async function getTeams() {
      const res = await axios(API_URL_TEAMS);
      console.log("res", res);
      setTeams(res.data);
    }
    getTeams();
  }, []);

  useEffect(() => {
    // refactor to only update the match that changes
    socket.on("createdMatch", data => {
      console.log("sockets");
      if (data.action === "createdMatch") {
        // console.log("data", data);
        getMatches();
      }
    });
  });

  useEffect(() => {
    // refactor to only update the match that changes
    socket.on("updatedMatch", data => {
      console.log("data", data);
      if (data.action === "updatedMatch") {
        getMatches();
      }
    });
  }, []);
  return (
    <div className="matches">
      <h1>{matches.length} Matches</h1>
      <button>Create Match</button>
      <button onClick={() => toggleShowAllMatches(matches)}>
        Show All Match
      </button>
      {currentMatches}
    </div>
  );
};

export default Matches;
