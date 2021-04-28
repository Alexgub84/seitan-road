import React, { Component } from "react";
import { connect } from "react-redux";

import { NavLink,withRouter } from "react-router-dom";

import { logout } from "../../store/actions/userActions";

class _NavBar extends Component {

  state = {
    active: "",
  };

  render() {
    const cartBtnClass = this.props.total === 0 ? "empty" : "";
    return (
      <div className="main-container ">
        <div className="nav-bar flex justify-between">
          <img
            className="humburger"
            src={require("../../assets/icons/hamburger.svg")}
            alt="h"
          />
          <NavLink
            exact
            className="nav-bar-logo"
            activeClassName="active"
            to="/shop"
          >
            <img
              src={require("../../assets/imgs/logo/logo-navbar.png")}
              alt="logo"
            />
          </NavLink>
          <section className="main-buttons flex justify-between">
            <NavLink
              exact
              className="nav-button"
              activeClassName="active"
              to="/shop"
            >
              חנות
            </NavLink>
            <NavLink exact className="nav-button" to="/ourstory">
              הסיפור שלנו
            </NavLink>
            <NavLink exact className="nav-button" to="/about">
              על הסייטן{" "}
            </NavLink>
            <NavLink exact className="nav-button" to="/supply">
              משלוחים{" "}
            </NavLink>
          </section>
          <section className="checkout">
            {(this.props.loggedInUser && (
              <button onClick={() => this.props.logout()}>התנתקי</button>
            )) || (
              <NavLink
                to={{
                  pathname: "/checkout",
                  source: { fromNavBar: true },
                  state: { fromNavBar: true },
                }}
              >
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

 const NavBar2 = connect(mapStateToProps, mapDispatchToProps)(_NavBar);

 export const NavBar = withRouter(props => <NavBar2 {...props}/>);
