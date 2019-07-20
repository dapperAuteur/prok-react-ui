import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import openSocket from "socket.io-client";
import Match from "./Match/Match";
import KickballContext from "./../store/kickball-context";

const API_URL = "http://localhost:8080";

const API_URL_MATCHES = "/matches";
const API_URL_TEAMS = "/teams";
const socket = openSocket(API_URL);

const Matches = props => {
  const context = useContext(KickballContext);
  console.log("context", context);
  // console.log("props", props);
  const [matches, setMatches] = useState([]);
  const [showAllMatches, setShowAllMatches] = useState(true);
  const [teams, setTeams] = useState([]);

  const getMatches = async function() {
    const res = await axios(API_URL_MATCHES);
    if (showAllMatches) {
      setMatches(res.data);
    }
  };

  // const getTeams = async function() {
  //   const res = await axios(API_URL_TEAMS);
  //   teams = res.data
  // };

  // const getData = function() {
  //   getMatches();
  //   getTeams();
  // };

  let currentMatches = null;

  const toggleShowAllMatches = matches => {
    // console.log("matches", matches);
    let filteredMatches = matches.filter(
      match => match.matchComplete === false
    );
    setShowAllMatches(!showAllMatches);
    setMatches(filteredMatches);
  };

  if (matches.length > 0) {
    // console.log("matches", matches);
    currentMatches = matches.map(match => {
      const awayTeamObj = teams.find(team => {
        return match.awayTeam === team._id;
      });
      const homeTeamObj = teams.find(team => {
        return match.homeTeam === team._id;
      });
      return (
        <Match
          key={match._id}
          match={match}
          awayTeamObj={awayTeamObj}
          homeTeamObj={homeTeamObj}
        />
      );
    });
  } else {
    currentMatches = <h2>No Matches</h2>;
  }

  useEffect(() => {
    getMatches();
  }, [showAllMatches]);

  useEffect(() => {
    document.title = `${matches.length} matches currently`;
  }, [matches, showAllMatches]);

  useEffect(() => {
    socket.on("createdMatch", data => {
      console.log("data", data);
      if (data.action === "createdMatch") {
        getMatches();
      }
    });
  });

  useEffect(() => {
    socket.on("updatedMatch", data => {
      console.log("data", data);
      if (data.action === "updatedMatch") {
        getMatches();
      }
    });
  }, []);

  return (
    <div className="matches">
      <h1>Matches</h1>
      <button>Create Match</button>
      <button onClick={() => toggleShowAllMatches(matches)}>
        {showAllMatches ? "Show Current Matches" : "Show All Match"}
      </button>
      <p className="playing">Matches Currently Playing Have A Green Border</p>
      {currentMatches}
    </div>
  );
};

export default Matches;
