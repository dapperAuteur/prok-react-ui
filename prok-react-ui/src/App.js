import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Match0002 from "./components/Match/Match0002";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ReadyState from "./store/ReadyState";
import MatchContext from "./store/match-context";
import MainNavigation from "./components/Routing/MainNavigation";
import Player from "./components/Players/Player";
import Players from "./components/Players/Players";
import Matches0003 from "./components/Match/Matches0003";

export default function App(props) {
  // console.log("props", props);
  const context = useContext(MatchContext);
  const { matches } = context;
  console.log("context", context);
  return (
    <div className="gradient-background">
      <ReadyState className="gradient-background">
        <Router>
          <MainNavigation matches={matches} />
          <Switch>
            <Route path="/" exact />
            <Route path="/player" component={Player} exact />
            <Route path="/players" component={Players} exact />
            <Route path="/match" component={Match0002} exact />
            <Route
              path="/matches"
              component={() => <Matches0003 props={matches} />}
              exact
            />
            <Route path="/sign-in" component={Login} exact />
            <Route path="/sign-up" component={Register} exact />
            <div>
              <button onClick={context.createNewMatch}>Create New Match</button>
            </div>
          </Switch>
        </Router>
      </ReadyState>
    </div>
  );
}
