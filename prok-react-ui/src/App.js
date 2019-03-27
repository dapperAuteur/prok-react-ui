import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Match0002 from "./components/Match/Match0002";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Matches from "./components/Match/Matches";
import ReadyState from "./store/ReadyState";
import MatchContext from "./store/match-context";
import MainNavigation from "./components/Routing/MainNavigation";

export default function App(props) {
  const context = useContext(MatchContext);
  // console.log("context", context);
  function getCook(cookiename) {
    // Get name followed by anything except a semicolon
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
    );
  }

  //Sample usage
  var cookieValue = getCook("sid");
  // console.log("cookieValue", cookieValue);
  return (
    <ReadyState>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact />
          <Route path="/match" component={Match0002} exact />
          <Route path="/matches" component={Matches} exact />
          <Route path="/sign-in" component={Login} exact />
          <Route path="/sign-up" component={Register} exact />
          <div>
            <button onClick={context.createNewMatch}>Create New Match</button>
          </div>
        </Switch>
      </Router>
    </ReadyState>
  );
}
