import React from "react";

const Player = props => {
  // console.log("props", props.player);
  const player = {
    atBats: props.player.atBats,
    currentlyPlaying: props.player.currentlyPlaying,
    inningsPitched: props.player.inningsPitched,
    kicks: props.player.kicks,
    nickname: props.player.nickname,
    pitchingOuts: props.player.pitchingOuts,
    walks: props.player.walks
  };
  return (
    <div
      className={player.currentlyPlaying ? "player currentlyPlaying" : "player"}
    >
      <h1>nickname: {player.nickname}</h1>
      <p>at bats: {player.atBats}</p>
      <p>innings pitched: {player.inningsPitched}</p>
      <p>kicks: {player.kicks}</p>
      <p>pitching outs: {player.pitchingOuts}</p>
      <p>walks: {player.walks}</p>
    </div>
  );
};

export default Player;
