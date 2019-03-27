import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MatchContext from "./../../store/match-context";
import axios from "axios";

import "./MainNavigation.css";
import Axios from "axios";
const signOut = async => {
  const res = axios.post("//localhost:8080/api/ver0001/auth/sign-out");
};

export default function MainNavigation(props) {
  const context = useContext(MatchContext);
  const { createMatch, currentUser } = context;
  // console.log("currentUser", currentUser);
  // console.log("createMatch", createMatch);
  return (
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
            <button onClick={createMatch}>Create Match</button>
          </li>
          {/* {currentUser ? (
            <ul>
              <li>
                <button onClick={signOut}>Sign Out</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink to="/sign-in">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </ul>
          )} */}
          <li>
            <button onClick={signOut}>Sign Out</button>
          </li>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
