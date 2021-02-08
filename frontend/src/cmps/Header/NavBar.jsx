import React, { Component } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import { logout } from "../../store/actions/userActions";

class _NavBar extends Component {
  state = {
    active: "",
  };
  onNavBtnClicked = (ev) => {
    // console.log(ev);
  };
  render() {
    const cartBtnClass = this.props.total === 0 ? "empty" : "";
    return (
      <div className="main-container ">
        <div className="nav-bar flex justify-between">
          <NavLink
            className="nav-bar-logo"
            to="/"
            onClick={() => this.onNavBtnClicked()}
          >
            <img
              src={require("../../assets/imgs/logo/logo-navbar.png")}
              alt="logo"
            />
          </NavLink>
          <section className="main-buttons flex justify-between">
            <NavLink
              className="nav-button"
              to="/shop"
              onClick={() => this.onNavBtnClicked()}
            >
              חנות
            </NavLink>
            <NavLink
              className="nav-button"
              to="/"
              onClick={() => this.onNavBtnClicked()}
            >
              הסיפור שלנו
            </NavLink>
            <NavLink
              className="nav-button"
              to="/"
              onClick={() => this.onNavBtnClicked()}
            >
              על הסייטן{" "}
            </NavLink>
            <NavLink
              className="nav-button"
              to="/"
              onClick={() => this.onNavBtnClicked()}
            >
              משלוחים{" "}
            </NavLink>
          </section>
          <section className="checkout">
            {(this.props.loggedInUser && (
              <button onClick={() => this.props.logout()}>התנתקי</button>
            )) || (
              <NavLink to="/checkout">
                <div className={`cart-btn ${cartBtnClass} flex`}>
                  <span>{`₪${this.props.total}`}</span>
                  <img src={require("../../assets/icons/cart.svg")} alt="" />
                </div>
              </NavLink>
            )}
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.loggedInUser,
    total: state.userReducer.total,
  };
};
const mapDispatchToProps = { logout };

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(_NavBar);
