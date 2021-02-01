import React, { Component } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import { logout } from "../store/actions/userActions";

class _NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/">
          <div>LOGO</div>
        </NavLink>
        <section className="flex">
          <NavLink className="nav-button" to="/">
            ראשי
          </NavLink>
          <NavLink className="nav-button" to="/shop">
            מוצרים
          </NavLink>
        </section>
        <section>
          <NavLink className="nav-button" to="/checkout">
            {" "}
            עגלה
          </NavLink>
          {this.props.loggedInUser && (
            <button onClick={() => this.props.logout()}>התנתקי</button>
          )}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.loggedInUser,
  };
};
const mapDispatchToProps = { logout };

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(_NavBar);
