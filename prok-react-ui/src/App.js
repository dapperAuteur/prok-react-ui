import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Match0002 from "./components/Match/Match0002";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Matches from "./components/Match/Matches";
import ReadyState from "./store/ReadyState";
import MatchContext from "./store/match-context";
import MainNavigation from "./components/Routing/MainNavigation";
import socketIOClient from "socket.io-client";
const API_URL = "//localhost:8080/api/ver0001/matches";

export default function App(props) {
  console.log("props", props);
  const context = useContext(MatchContext);
  const { matches } = context;
  console.log("context", context);
  // const setMatches = context.setMatches;
  // const getCurrentMatches = async context => {
  //   const res = await axios.get(API_URL).then(serverMatches => {
  //     // console.log("serverMatches", serverMatches);
  //     setMatches(serverMatches.data);
  //     return serverMatches.data;
  //   });
  //   return res;
  // };

  // const send = () => {
  //   const socket = socketIOClient(context.endpoint);
  //   console.log("matches", matches);
  //   socket.emit("update-matches", matches);
  // };

  // useEffect(() => {
  //   send();
  //   getCurrentMatches();
  //   const socket = socketIOClient(context.endpoint);
  //   socket.on("updated-matches", serverEmit => {
  //     console.log("serverEmit.matches", serverEmit);
  //     if (serverEmit.length !== 0) {
  //       console.log("serverEmit.length", serverEmit.length);
  //       setMatches(serverEmit);
  //     }
  //   });
  // }, [matches]);
  return (
    <div className="gradient-background">
      <ReadyState className="gradient-background">
        <Router>
          <MainNavigation />
          <Switch>
            <Route path="/" exact />
            <Route path="/match" component={Match0002} exact />
            <Route
              path="/matches"
              component={() => <Matches props={matches} />}
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
