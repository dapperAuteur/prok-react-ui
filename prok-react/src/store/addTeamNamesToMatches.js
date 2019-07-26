export const addTeamNamesToMatches = (matches, teams) => {
  matches.map(match => {
    let awayTeamObj = teams.find(team => {
      return match.awayTeam === team._id;
    });
    match.awayTeamObj = awayTeamObj;
    match.awayTeamName = awayTeamObj.teamName;
    let homeTeamObj = teams.find(team => {
      return match.homeTeam === team._id;
    });
    match.homeTeamObj = homeTeamObj;
    match.homeTeamName = homeTeamObj.teamName;
  });
  console.log("matches", matches);
  return matches;
};
