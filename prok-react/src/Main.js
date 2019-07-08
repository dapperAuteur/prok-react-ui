import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Match from "./Matches/Match/Match";
import Matches from "./Matches/Matches";
import CreateMatch from "./Matches/Match/CreateMatch";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          <li>
            <Link to="/my-current/match">My Current Match</Link>
          </li>
          <li>
            <Link to="/match/create-match">Create Match</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const Main = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact />
        <Route path="/matches" exact component={Matches} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/match/create-match" exact component={CreateMatch} />
        <Route path="/match/matchId/edit" exact component={CreateMatch} />
        <Route path="/my-current/match" exact component={Match} />
        <h1>Kickball</h1>
      </div>
    </Router>
  );
};

export default Main;
