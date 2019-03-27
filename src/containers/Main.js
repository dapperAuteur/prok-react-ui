import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Match0002 from "../components/Match/Match0002_createMatchBranch";
import Matches from "./../components/Match/Matches";

const routes = [
  { path: "/" },
  { path: "/match", component: Match0002 },
  { path: "/matches", component: Matches }
];
class Main extends Component {
  return() {
    return (
      <div className="Main">
        <Switch>
          {routes.map(({ path, component: C, data }) => (
            <Route
              key={C}
              path={path}
              render={props => <C {...props} data={this.props} />}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
