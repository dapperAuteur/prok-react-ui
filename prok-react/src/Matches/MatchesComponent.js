import React, { Component } from "react";
import axios from "axios";
import openSocket from "socket.io-client";
import Match from "./Match/Match";

const API_URL = "http://localhost:8080";
const API_URL_MATCHES = "/matches";
const API_URL_TEAMS = "/teams";

export default class MatchesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      showAllMatches: true,
      teams: [],
      awayScore: 0,
      homeScore: 0,
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: 0
    };
  }

  componentDidMount() {
    let currentComponent = this;
    // console.log("this", this);
    const socket = openSocket(API_URL);
    console.log("socket", socket);
    socket.on("createMatch", data => {
      console.log("sockets");
      if (data.action === "create") {
        console.log("data", data);
        getMatches();
      }
    });
    const getMatches = async function() {
      const res = await axios(API_URL_MATCHES);
      if (currentComponent.state.showAllMatches) {
        currentComponent.setState({
          matches: res.data
        });
      }
      console.log("getMatches");
    };
    async function getTeams() {
      const res = await axios(API_URL_TEAMS);
      console.log("res", res);
      currentComponent.setState({
        teams: res.data
      });
    }
    getTeams();
    getMatches();
    document.title = `${
      currentComponent.state.matches.length
    } matches currently`;
  }
  render() {
    let currentMatches = null;
    const toggleShowAllMatches = matches => {
      // console.log("matches", matches);
      let filteredMatches = matches.filter(
        match => match.matchComplete === false
      );
      // console.log("showAllMatches", showAllMatches);
      this.state.setState({
        showAllMatches: !this.state.showAllMatches
      });
      console.log("showAllMatches", this.state.showAllMatches);
      console.log("filteredMatches", filteredMatches);
      this.state.setState({
        matches: filteredMatches
      });
      // return filteredMatches;
    };

    if (this.state.matches.length > 0) {
      // console.log("matches.length", matches.length);
      currentMatches = this.state.matches.map(match => {
        const awayTeamObj = this.state.teams.find(team => {
          // console.log("team", team);
          // console.log("match", match);
          return match.awayTeam === team._id;
        });
        const homeTeamObj = this.state.teams.find(team => {
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
            awayScore={this.state.awayScore}
            setAwayScore={this.state.setAwayScore}
            homeScore={this.state.homeScore}
            incrementScore={this.state.incrementScore}
            balls={this.state.balls}
            strikes={this.state.strikes}
            fouls={this.state.fouls}
            outs={this.state.outs}
          />
        );
      });
    } else {
      currentMatches = <h2>No Matches</h2>;
    }

    return (
      <div className="matches">
        <h1>{this.state.matches.length} Matches</h1>
        <button>Create Match</button>
        <button onClick={() => toggleShowAllMatches(this.state.matches)}>
          Show All Match
        </button>
        {currentMatches}
      </div>
    );
  }
}
