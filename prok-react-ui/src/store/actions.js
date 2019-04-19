import axios from "axios";
import { GET_PLAYERS } from "./actionTypes";
const API_URL = "/players";

export const getPlayersAction = async dispatch => {
  const res = await axios.get(API_URL).then(foundPlayers => {
    console.log("foundPlayers", foundPlayers);
    dispatch({ type: GET_PLAYERS, payload: foundPlayers });
  });
  // .catch(err => {
  //   console.log("err", err);
  // });
  return res;
};
