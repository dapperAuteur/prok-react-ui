import React, { useContext, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalState from "./store/GlobalState";
import KickballContext from "./store/kickball-context";
import Matches from "./Matches/Matches";
import MyCurrentMatch from "./Matches/Match/MyCurrentMatch";
import CreateMatch from "./Matches/Match/CreateMatch";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import Counter from "./reducerTest/Counter";
import "./App.css";

function NavBar() {
  const context = useContext(KickballContext);
  const signOut = context.signOut;
  return (
    <nav className="navbar">
      <div className="dropdown">
        <div id="kb-dropdown1" className="dropdown1">
          <Link className="btn" to="/">
            Bush League Kickball
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
              <Link to="/" className="btn" onClick={() => signOut()}>
                Log Out
              </Link>
              <span>
                <Link to="/sign-up" className="btn">
                  Sign Up
                </Link>
                <Link to="/sign-in" className="btn">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Main = () => {
  const context = useContext(KickballContext);
  // console.log("context", context);
  const cookie = decodeURIComponent(document.cookie);
  console.log("cookie", cookie);
  useEffect(() => {
    return () => {
      console.log("context", context);
    };
  }, [context]);
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <NavBar />
          {cookie ? <p>True</p> : <p>False</p>}
          <Route path="/" exact />
          <Route path="/matches" exact component={Matches} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/match/create-match" exact component={CreateMatch} />
          <Route path="/match/matchId/edit" exact component={CreateMatch} />
          <Route path="/my-current/match" exact component={MyCurrentMatch} />
          <h1>Kickball</h1>
          <Counter />
        </div>
      </Router>
    </GlobalState>
  );
};

export default Main;
