import React from "react";

const Player = props => {
  console.log("props", props.player);
  const player = {
    atBats: props.player.atBats,
    currentlyPlaying: props.player.currentlyPlaying,
    inningsPitched: props.player.inningsPitched,
    kicks: props.player.kicks,
    nickname: props.player.nickname,
    pictchingOuts: props.player.pictchingOuts,
    walks: props.player.walks
  };
  return (
    <div>
      <h1>Player Component</h1>
      <p>at bats: {player.atBats}</p>
      <p>currently playing: {player.currentlyPlaying}</p>
      <p>innings pitched: {player.inningsPitched}</p>
      <p>kicks: {player.kicks}</p>
      <p>nickname: {player.nickname}</p>
      <p>pictching outs: {player.pictchingOuts}</p>
      <p>walks: {player.walks}</p>
    </div>
  );
};

export default Player;
