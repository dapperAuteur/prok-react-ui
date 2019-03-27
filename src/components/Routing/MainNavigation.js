import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

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
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
