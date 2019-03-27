import React, { useContext } from "react";
import "./App.css";
import Match0002 from "./components/Match/Match0002";
import ReadyState from "./store/ReadyState";
import MatchContext from "./store/match-context";

export default function App(props) {
  const context = useContext(MatchContext);
  return (
    <ReadyState>
      <div className="App">
        <Match0002 />
        <button onClick={context.createNewMatch}>Create New Match</button>
      </div>
    </ReadyState>
  );
}
