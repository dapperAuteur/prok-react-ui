import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
// import Match from "./Matches/Match/Match";
import Matches from "./Matches/Matches";
import MyCurrentMatch from "./Matches/Match/MyCurrentMatch";
import CreateMatch from "./Matches/Match/CreateMatch";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import "./App.css";

const API_URL = "/auth/sign-out";

function NavBar() {
  const [currentUser, setCurrentUser] = useState({});
  const signOut = async currentUser => {
    const res = await axios.post(API_URL, currentUser);
    document.cookie = "sid=" + JSON.stringify(res.data.session);
    setCurrentUser(res.data.session);
    console.log("res", res);
    console.log("currentUser", currentUser);
  };
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link className="button" to="/">
              Home
            </Link>
          </li>
          {currentUser._id ? (
            <div>
              {
                <li>
                  <Link className="button" to="/" onClick={() => signOut()}>
                    Sign Out
                  </Link>
                </li>
              }
            </div>
          ) : (
            <div>
              <li>
                <Link className="button" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="button" to="/sign-up">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          <li>
            <Link className="button" to="/matches">
              Matches
            </Link>
          </li>
          <li>
            <Link className="button" to="/my-current/match">
              My Current Match
            </Link>
          </li>
          <li>
            <Link className="button" to="/match/create-match">
              Create Match
            </Link>
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
        <Route path="/my-current/match" exact component={MyCurrentMatch} />
        <h1>Kickball</h1>
      </div>
    </Router>
  );
};

export default Main;
