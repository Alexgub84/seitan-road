import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loadItems } from "../store/actions/itemActions";
import { loadSettings } from "../store/actions/settingsActions";

import { ItemsList } from "../cmps/ItemsList";
import { Cart } from "../cmps/Cart";

class _ShopApp extends Component {
  state = {};
  async componentDidMount() {
    await this.props.loadItems();
    await this.props.loadSettings();
  }

  render() {
    const { items } = this.props;
    if (!items) return <h1>Loading...</h1>;
    return (
      <div className="main-container shop flex">
        <ItemsList items={items} />
        <Cart />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.items,
    loggedInUser: state.userReducer.loggedInUser,
  };
};
const mapDispatchToProps = {
  loadItems,
  loadSettings,
};
export const ShopApp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_ShopApp)
);
