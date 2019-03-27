import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Match from "../components/Match/Match0002";

const routes = [
  { path: "/match", component: Match },
  { path: "/matches", component: Matches }
];
