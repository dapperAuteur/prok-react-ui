import React from "react";

export default function MyCreatedMatch(props) {
  let createdMatch;
  let myCurrentMatch;
  console.log("props", props);
  if (typeof Storage !== "undefined") {
    if (localStorage.hasOwnProperty("createdMatch")) {
      createdMatch = JSON.parse(localStorage.getItem("createdMatch"));
    }
    if (localStorage.hasOwnProperty("myCurrentMatch")) {
      myCurrentMatch = JSON.parse(localStorage.getItem("myCurrentMatch"));
    }
  }
  console.log("createdMatch", createdMatch);
  return (
    <div>
      <h3>MyCreatedMatch</h3>
      <div>
        <button>Away Team: {createdMatch.awayTeamScore}</button>
        <button>Home Team: {createdMatch.homeTeamScore}</button>
      </div>
      <div>
        <button>Balls {createdMatch.balls}</button>
      </div>
      <div>
        <button>Strikes {createdMatch.strikes}</button>
      </div>
      <div>
        <button>Fouls {createdMatch.fouls}</button>
      </div>
      <div>
        <button>Outs {createdMatch.outs}</button>
      </div>
      <div>
        <h4>{createdMatch.currentInning}</h4>
      </div>
    </div>
  );
}
