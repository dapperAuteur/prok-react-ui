import React from "react";

const PitchCount = pitchCount => {
  // console.log("pitchCount", pitchCount);
  let {
    balls,
    setBalls,
    strikes,
    setStrikes,
    fouls,
    setFouls,
    outs,
    setOuts
  } = pitchCount.pitchCount;
  let { matchId, scoreKeeper, currentInning } = pitchCount.match;
  // console.log("matchId", matchId);
  return (
    <div className="pitch-count">
      <div>
        <h3>PitchCount</h3>
        <button onClick={() => setBalls(balls + 1)} className="stat">
          Balls: {balls}
        </button>
        <button onClick={() => setStrikes(strikes + 1)} className="stat">
          Strikes: {strikes}
        </button>
        <button onClick={() => setFouls(fouls + 1)} className="stat">
          Fouls: {fouls}
        </button>
        <button onClick={() => setOuts(outs + 1)} className="stat">
          Outs: {outs}
        </button>
      </div>
      <div>
        <h3>{currentInning}</h3>
        <h3>{scoreKeeper} is the Scorekeeper.</h3>
      </div>
    </div>
  );
};

export default PitchCount;
