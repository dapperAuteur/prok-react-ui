import React, { useContext, useEffect, useState } from "react";
import KickballContext from "./../store/kickball-context";
import Match from "./Match/Match";

const Matches0001 = props => {
  console.log("props", props);
  const context = useContext(KickballContext);
  const currentMatches = context.matchState.matches;
  // const [currentMatches, setMatches] = useState([]);
  console.log("context.matchState.matches", context.matchState.matches);
  // if (currentMatches.length === 0) {
  // setMatches(context.matchState.matches);
  // }

  const getMatches = context.getMatches;
  const [showAllMatches, setShowAllMatches] = useState(true);

  const toggleShowAllMatches = currentMatches => {
    console.log("currentMatches", currentMatches);
    let filteredMatches = currentMatches.filter(
      match => match.matchComplete === false
    );
    console.log("filteredMatches", filteredMatches);
    setShowAllMatches(!showAllMatches);
    currentMatches = filteredMatches;
    // setMatches(filteredMatches);
  };

  useEffect(() => {
    getMatches();
    // setMatches(context.matchState.matches);
  }, []);
  return (
    <KickballContext.Consumer>
      {context => (
        <React.Fragment>
          {currentMatches ? (
            <ul>
              <h3>Matches</h3>
              <button onClick={() => toggleShowAllMatches(currentMatches)}>
                {showAllMatches ? "Show Current Matches" : "Show All Match"}
              </button>
              <p className="playing">
                Matches Currently Playing Have A Green Border
              </p>
              {currentMatches.map(match => {
                return <Match key={match._id} match={match} />;
              })}
            </ul>
          ) : null}
        </React.Fragment>
      )}
    </KickballContext.Consumer>
  );
};

export default Matches0001;
