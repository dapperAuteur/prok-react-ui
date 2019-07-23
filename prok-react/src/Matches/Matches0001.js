import React from "react";
import KickballContext from "./../store/kickball-context";
import Match from "./Match/Match";

const Matches0001 = props => {
  console.log("props", props);

  return (
    <KickballContext.Consumer>
      {context => (
        <React.Fragment>
          {context.matches ? (
            <ul>
              {context.matches.map(match => {
                // const awayTeamObj = teams.find(team => {
                //   return match.awayTeam === team._id;
                // });
                // const homeTeamObj = teams.find(team => {
                //   return match.homeTeam === team._id;
                // });
                return (
                  <Match
                    key={match._id}
                    match={match}
                    // awayTeamObj={awayTeamObj}
                    // homeTeamObj={homeTeamObj}
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
