import React, { useReducer, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import authReducer from "./../store/authReducer";
import { LOG_IN } from "./../store/actionTypes";
axios.defaults.withCredentials = true;

// const API_URL = "/auth/sign-in";

const SignIn = () => {
  const [loginRequest, dispatch] = useReducer(authReducer, {});
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username,
      password
    };
    console.log("loginRequest", loginRequest);

    // login(loginRequest);
    dispatch({ type: LOG_IN, payload: loginRequest });
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
