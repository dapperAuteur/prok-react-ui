import React, { useContext, useEffect, useState } from "react";
import KickballContext from "./../store/kickball-context";
import Match from "./Match/Match";

const Matches0001 = props => {
  const context = useContext(KickballContext);
  // console.log("props", props);
  console.log("context", context);
  console.log("context.matchState.matches", context.matchState.matches);
  const currentMatches = context.matchState.matches;
  const getMatches = context.getMatches;
  const [showAllMatches, setShowAllMatches] = useState(true);
  const [matches, setMatches] = useState(currentMatches);

  const toggleShowAllMatches = currentMatches => {
    console.log("currentMatches", currentMatches);
    let filteredMatches = currentMatches.filter(
      match => match.matchComplete === false
    );
    console.log("filteredMatches", filteredMatches);
    setShowAllMatches(!showAllMatches);
    setMatches(filteredMatches);
  };

  useEffect(() => {
    getMatches();
    setMatches(currentMatches);
  }, [showAllMatches]);
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
                // console.log("context", context);
                const awayTeamObj = context.matchState.teams.find(team => {
                  return match.awayTeam === team.id;
                });
                const homeTeamObj = context.matchState.teams.find(team => {
                  return match.homeTeam === team.id;
                });
                // console.log("awayTeamObj", awayTeamObj);
                // console.log("homeTeamObj", homeTeamObj);
                return (
                  <Match
                    key={match.id}
                    match={match}
                    awayTeamObj={awayTeamObj}
                    homeTeamObj={homeTeamObj}
                  />
                );
              })}
            </ul>
          ) : null}
        </React.Fragment>
      )}
    </KickballContext.Consumer>
  );
};

export default Matches0001;
