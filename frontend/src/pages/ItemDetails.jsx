import React, { Component } from "react";
import { connect } from "react-redux";

import { AddToCart } from "../cmps/AddToCart";

import { loadItems } from "../store/actions/itemActions";
import { settingsItems } from "../store/actions/itemActions";

export class _ItemDetails extends Component {
  state = {
    item: null,
  };

  async componentDidMount() {
    await this.props.loadItems();
    const { id } = this.props.match.params;
    const itemToShow = this.props.items.find((item) => item._id === id);
    this.setState({ item: { ...itemToShow } });
  }

  render() {
    const { item } = this.state;
    if (!item) return <h2>Loading...</h2>;
    return (
      <div className="main-container">
        <h2>{item.name}</h2>
        <img src={item.imgUrl} alt="seitan-img" />
        <AddToCart item={item} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.items,
  };
};
const mapDispatchToProps = {
  loadItems,
};

export const ItemDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ItemDetails);
