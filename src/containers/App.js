import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Match0002 from "../components/Match/Match0002";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Match0002 />
      </div>
    );
  }
}

export default App;
