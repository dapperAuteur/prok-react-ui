import React, { useContext, useState } from "react";
// import { login } from "./../../actions/securityActions";
import MatchContext from "./../../store/match-context";
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";
axios.defaults.withCredentials = true;
const API_URL = "/auth/sign-in";
export default function Login(props) {
  const context = useContext(MatchContext);
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log("context", context);

  const login = async loginRequest => {
    loginRequest.withCredentials = true;
    const res = await axios.post(API_URL, loginRequest);
    // console.log("res 41", res.data.session);
    document.cookie = "sid=" + JSON.stringify(res.data.session);
    context.setUser(res.data.session.user);

    return res;
  };

  function onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username: username,
      password: password
    };
    // console.log("loginRequest 55", loginRequest);
    const user = login(loginRequest);
    // console.log("user 58", user);
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="username"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.username
                  })}
                  placeholder="Email Address (Username)"
                  name="username"
                  autoComplete="off"
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
                {errors.username && (
                  <div className="invalid-feedback"> {errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  autoComplete="off"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && (
                  <div className="invalid-feedback"> {errors.password}</div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
