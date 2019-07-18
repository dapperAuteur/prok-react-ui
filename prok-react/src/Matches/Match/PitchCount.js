import React from "react";

const PitchCount = pitchCount => {
  // console.log("pitchCount", pitchCount);
  let { balls, strikes, fouls, outs } = pitchCount.pitchCount;
  let { scoreKeeper, currentInning } = pitchCount.match;
  // console.log("matchId", matchId);
  return (
    <div className="pitch-count">
      <div>
        <h3>PitchCount</h3>
        <span className="stat">Balls: {balls}</span>
        <span className="stat">Strikes: {strikes}</span>
        <span className="stat">Fouls: {fouls}</span>
        <span className="stat">Outs: {outs}</span>
      </div>
      <div>
        <h3>{currentInning}</h3>
        {/* <h3>{scoreKeeper} is the Scorekeeper.</h3> */}
      </div>
    </div>
  );
};

export default PitchCount;
