import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { ItemQuantity } from "./ItemQuantity";
import { FreeShipmentBar } from "./FreeShipmentBar";

import {
  updateQuantity,
  deleteItem,
  emptyCart,
} from "../store/actions/userActions";

export class _Cart extends Component {
  state = {
    total: 0,
  };
  componentDidMount() {
    this.setState({ path: this.props.match.path });
  }

  onUpdateQuantity = (item, diff) => {
    if ((diff === -1) & (item.quantity === 1)) return;
    item.quantity += diff;
    this.props.updateQuantity({ item });
  };
  getTotalPriceForItem = (item) => {
    const totalForItem =
      item.quantity *
      (item.price +
        (item.souse && item.souse !== "ללא מרינדה" ? item.sousePrice : 0));
    // this.setState({ total: this.state.total + totalForItem });
    return `${totalForItem}ש"ח`;
  };
  onOrder = () => {
    const order = {
      cart: this.props.cart,
      address: this.state.address,
      customer: this.state.customer,
    };
  };
  render() {
    if (this.props.cart.length === 0)
      return (
        <div className="cart">
          <h2>העגלה ריקה</h2>
        </div>
      );
    let nextStepButton;
    if (this.state.path === "/checkout") {
      nextStepButton = (
        <button onClick={this.props.onNextClick}>בחר כתובת</button>
      );
    } else {
      nextStepButton = (
        <NavLink to="/checkout">
          <button>השלם את ההזמנה</button>
        </NavLink>
      );
    }
    return (
      <div className="cart">
        <FreeShipmentBar
          min={this.props.settings.freeDeliveryPrice}
          total={this.props.total}
        />
        <ul>
          {this.props.cart.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name}</span>
              <span>{`${item.price}ש"ח`}</span>
              {item.souse && <span> {item.souse}</span>}

              <section className="flex">
                <button onClick={() => this.onUpdateQuantity(item, +1)}>
                  +
                </button>
                <ItemQuantity measure={item.measure} quantity={item.quantity} />
                <button onClick={() => this.onUpdateQuantity(item, -1)}>
                  -
                </button>
              </section>
              <span>{this.getTotalPriceForItem(item)}</span>
              <button onClick={() => this.props.deleteItem(item)}>X</button>
            </li>
          ))}
        </ul>
        <section> סיכום: {this.props.total}</section>
        <button onClick={this.props.emptyCart}>רוקן </button>
        {nextStepButton}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
    total: state.userReducer.total,
    settings: state.settingsReducer.settings,
  };
};

const mapDispatchToProps = {
  updateQuantity,
  deleteItem,
  emptyCart,
};

export const Cart = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_Cart)
);
