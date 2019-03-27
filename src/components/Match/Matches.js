import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_URL = "//localhost:8080/api/ver0001/matches";
const API_URL = "https://react-shopping-list.firebaseio.com/matches.json";

// let matches = [];
let matchData = {};
// const getMatches = async function() {
//   const resMatches = await axios
//     .get(API_URL)
//     .then(function(res) {
//       console.log("res 13", res);
//       matchData = res;
//     })
//     .catch(function(err) {
//       console.log("err 17", err);
//     });
// };

// setTimeout(() => {
//   getMatches();
// }, 5000);

// matches = matchData.data;
// console.log("matches 26", matches);

export default function Matches() {
  const [matches, setMatches] = useState([]);
  // getMatches();
  // console.log("matches 30", matches);
  // useEffect(() => {
  //   return (
  //     () => {
  //       axios.get(API_URL).then(res => {
  //         console.log("res 36", res);
  //       });
  //     },
  //     [matches]
  //   );
  // });
  return (
    <div>
      <h2>Matches</h2>
    </div>
  );
}
