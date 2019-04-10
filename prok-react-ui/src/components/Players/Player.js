import React from "react";
import "./Players.css";

export default function Player() {
  return (
    <div className="player-stat">
      <span className="stat">
        <h3>Player Name</h3>
        <h2>the commish</h2>
      </span>
      <span className="stat">
        <h3>At Bats</h3>
        <h2>0</h2>
      </span>
      <span className="stat">
        <h3>Kicks</h3>
        <h2>0</h2>
      </span>
      <span className="stat">
        <h3>Walks</h3>
        <h2>0</h2>
      </span>
      <span className="stat">
        <h3>Pitching Outs</h3>
        <h2>0</h2>
      </span>
      <span className="stat">
        <h3>Innings Pitched</h3>
        <h2>0</h2>
      </span>
    </div>
  );
}
