import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./MainNavigation.css";
import Axios from "axios";
const signOut = async => {
  const res = axios.post("//localhost:8080/api/ver0001/auth/sign-out");
};

const MainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/match">Match</NavLink>
        </li>
        <li>
          <NavLink to="/matches">Matches</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>
        <li>
          <button onClick={signOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
