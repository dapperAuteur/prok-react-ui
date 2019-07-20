import React, { useContext, useReducer, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import authReducer from "./../store/authReducer";
import KickballContext from "./../store/kickball-context";
import { SIGN_UP } from "../store/actionTypes";
axios.defaults.withCredentials = true;
const API_URL = "/auth/sign-up";

const SignUp = () => {
  const context = useContext(KickballContext);
  const [signUpRequest, dispatch] = useReducer(authReducer, {});
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = context.signUp;

  function onSubmit(e) {
    e.preventDefault();
    const signUpRequest = {
      username,
      password
    };
    console.log("signUpRequest", signUpRequest);
    signUp(signUpRequest);
  }
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="username"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.username
                  })}
                  placeholder="email address"
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
                    "is-invalid": errors.password
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

export default SignUp;
