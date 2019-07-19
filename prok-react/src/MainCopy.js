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
    <nav className="navbar">
      <div className="dropdown">
        <div id="kb-dropdown1" className="dropdown1">
          <Link className="btn" to="/">
            Home
          </Link>
          <div id="kb-content1" className="content">
            <Link className="btn btn-default" to="/matches">
              Matches
            </Link>
            {/* <Link className="btn btn-default" to="/my-current/match">
              My Current Match
            </Link> */}
            <Link className="btn btn-default" to="/match/create-match">
              Create Match
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <div id="kb-dropdown1" className="dropdown1">
            <button className="btn">Auth</button>
            <div id="kb-content1" className="content">
              {currentUser._id ? (
                <Link to="/" className="btn" onClick={() => signOut()}>
                  Log Out
                </Link>
              ) : (
                <span>
                  <Link to="/sign-up" className="btn">
                    Sign Up
                  </Link>
                  <Link to="/sign-in" className="btn">
                    Sign In
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const MainCopy = () => {
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

export default MainCopy;
