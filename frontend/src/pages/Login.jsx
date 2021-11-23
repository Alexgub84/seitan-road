import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField } from "@material-ui/core";

import { login, logout } from "../store/actions/userActions";

class _Login extends Component {
  state = {
    msg: "",
    loginCred: {
      userName: "",
      password: "",
    },
  };
  loginHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value,
      },
    }));
  };
  doLogin = async (ev) => {
    ev.preventDefault();
    const { userName, password } = this.state.loginCred;
    if (!userName || !password) {
      return this.setState({ msg: "אנא הכניסו שם משתמש וסיסמא" });
    }
    const userCreds = { userName, password };
    await this.props.login(userCreds);
    console.log("after login:", this.props.loggedInUser);
    if (this.props.loggedInUser) this.props.history.push("/control");
    this.setState({ loginCred: { userName: "", password: "" } });
  };
  render() {
    const loginSection = (
      <form className="login-form">
        <TextField
          autoFocus={true}
          required={true}
          type="text"
          name="userName"
          value={this.state.loginCred.userName}
          onChange={this.loginHandleChange}
          placeholder="User Name"
        />
        <br />
        <br />

        <TextField
          required={true}
          type="password"
          name="password"
          value={this.state.loginCred.password}
          onChange={this.loginHandleChange}
          placeholder="Password"
        />
        <br />
        <Button
          variant="text"
          variant="outlined"
          color="primary"
          onClick={this.doLogin}
        >
          Login
        </Button>
      </form>
    );
    const { loggedInUser } = this.props;
    return (
      <div className="login main-container">
        <h2>{this.state.msg}</h2>
        {loggedInUser && (
          <div>
            <h2>Welcome: {loggedInUser.userName}</h2>
            <Button
              variant="text"
              variant="outlined"
              color="primary"
              onClick={this.props.logout}
            >
              Logout
            </Button>
          </div>
        )}
        {!loggedInUser && loginSection}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.loggedInUser,
  };
};
const mapDispatchToProps = { login, logout };

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);
