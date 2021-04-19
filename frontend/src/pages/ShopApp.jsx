import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import { loadItems } from "../store/actions/itemActions";
import { loadSettings } from "../store/actions/settingsActions";

import { ItemsList } from "../cmps/ItemsList";
import { CartPreview } from "../cmps/CartPreview/CartPreview";
import { CartBtnMobile } from "../cmps/CartBtnMobile";
class _ShopApp extends Component {
  state = {};
  async componentDidMount() {
    await this.props.loadItems();
    await this.props.loadSettings();
  }

  render() {
    const { items } = this.props;
    if (_.isEmpty(items)) return <h1>Loading...</h1>;
    return (
      <div className="main-container">
        <div className="shop flex">
          <ItemsList items={items} />
          <CartPreview total={this.props.total} settings={this.props.settings}/>
          {/* <CartBtnMobile /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    total: state.userReducer.total,
    items: state.itemReducer.items,
    loggedInUser: state.userReducer.loggedInUser,
    settings: state.settingsReducer.settings,
  };
};
const mapDispatchToProps = {
  loadItems,
  loadSettings,
};
export const ShopApp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_ShopApp)
);
