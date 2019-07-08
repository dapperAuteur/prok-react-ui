import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";
axios.defaults.withCredentials = true;
const API_URL = "/auth/sign-up";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async signUpRequest => {
    signUpRequest.withCredentials = true;
    const res = await axios.post(API_URL, signUpRequest);
    document.cookie = "sid=" + JSON.stringify(res.data.session);
    console.log("res", res);
    return res;
  };

  function onSubmit(e) {
    e.preventDefault();
    const signUpRequest = {
      username,
      password
    };
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
                  placeholder="password"
                  name="password"
                  autoComplete="off"
                  onChange={e => setPassword(e.target.value)}
                  value
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
