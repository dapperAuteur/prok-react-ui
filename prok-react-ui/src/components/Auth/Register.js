import React, { useContext, useState } from "react";
// import { login } from "./../../actions/securityActions";
import MatchContext from "./../../store/match-context";
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";
axios.defaults.withCredentials = true;
const API_URL = "/auth/sign-up";

export default function Register(props) {
  const context = useContext(MatchContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.security.validToken) {
  //   //   this.props.history.push("/dashboard");
  //   // }
  //   if (nextProps.errors) {
  //     // console.log(nextProps);
  //     // console.log(nextProps.errors);
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  const signUp = async signUpRequest => {
    signUpRequest.withCredentials = true;
    // console.log("signUpRequest", signUpRequest);
    const res = await axios.post(API_URL, signUpRequest);
    // console.log("res", res);
    // console.log("res 41", res.data.session);
    document.cookie = "sid=" + JSON.stringify(res.data.session);
    context.setUser(res.data.session.user);
    return res;
  };

  function onSubmit(e) {
    e.preventDefault();
    const signUpRequest = {
      username: username,
      password: password
    };
    console.log("signUpRequest 55", signUpRequest);
    // this.props.login(signUpRequest);
    const user = signUp(signUpRequest);
    // console.log("user 58", user);
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
