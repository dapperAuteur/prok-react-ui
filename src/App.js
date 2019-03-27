import React, { Component } from "react";
import "./App.css";
import Match0002 from "./components/Match/Match0002";
import ReadyState from "./store/ReadyState";

class App extends Component {
  render() {
    return (
      <ReadyState>
        <div className="App">
          <Match0002 />
        </div>
      </ReadyState>
    );
  }
}

export default App;
