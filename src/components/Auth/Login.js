import React, { Component } from "react";
// import { login } from "./../../actions/securityActions";
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";
axios.defaults.withCredentials = true;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.security.validToken) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.security.validToken) {
    //   this.props.history.push("/dashboard");
    // }
    if (nextProps.errors) {
      // console.log(nextProps);
      // console.log(nextProps.errors);
      this.setState({ errors: nextProps.errors });
    }
  }

  login = async loginRequest => {
    loginRequest.withCredentials = true;
    const res = await axios.post(
      "//localhost:8080/api/ver0001/auth/sign-in",
      loginRequest
    );
    console.log("res 41", res.data.session);
    document.cookie = "sid=" + JSON.stringify(res.data.session);
    return res;
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("loginRequest 55", loginRequest);
    // this.props.login(loginRequest);
    const user = this.login(loginRequest);
    console.log("user 58", user);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="username"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
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
                    value={this.state.password}
                    onChange={this.onChange}
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
}

export default Login;
