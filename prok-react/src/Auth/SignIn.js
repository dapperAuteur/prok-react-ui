import React, { useContext, useReducer, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import authReducer from "./../store/authReducer";
import KickballContext from "./../store/kickball-context";
import { LOG_IN } from "./../store/actionTypes";
axios.defaults.withCredentials = true;

// const API_URL = "/auth/sign-in";

const SignIn = () => {
  const context = useContext(KickballContext);
  const [loginRequest, dispatch] = useReducer(authReducer, {});
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log("context", context);

  const login = context.login;

  function onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username,
      password,
      withCredentials: true
    };
    // console.log("loginRequest", loginRequest);

    login(loginRequest);
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="username"
                  className={classnames("form-control form-control-lg", {
                    "is-valid": errors.username
                  })}
                  placeholder="enter email address"
                  name="username"
                  autoComplete="off"
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-valid": errors.password
                  })}
                  placeholder="enter password"
                  name="password"
                  autoComplete="off"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
