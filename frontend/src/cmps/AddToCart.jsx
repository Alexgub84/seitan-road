import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addToCart } from "../store/actions/userActions.js";
import { AmountBtn } from "./ItemPreview/AmountBtn";
import { AddToCartBtn } from "./ItemPreview/AddToCartBtn";
import { MarinadaSelect } from "./ItemPreview/MarinadaSelect";

export class _AddToCart extends Component {
  state = {
    quantity: 0,
    cart: [],
    souse: null,
  };

  componentDidMount() {
    if (this.props.item.souses) this.setState({ souse: "ללא מרינדה" });
  }

  onAdd = (ev) => {
    this.stopAndPrevent(ev);
    this.setState({ quantity: this.state.quantity + 1 });
  };
  onReduce = (ev) => {
    this.stopAndPrevent(ev);
    if (this.state.quantity === 0) return;
    this.setState({ quantity: this.state.quantity - 1 });
  };
  onSouseChange = (souse) => {
    this.setState({ souse: souse });
  };
  onAddToCart = (ev) => {
    this.stopAndPrevent(ev);
    if (this.state.quantity === 0) return;
    this.setState({ quantity: 0 });
    if (this.props.item.souses) this.setState({ souse: "ללא מרינדה" });

    let itemToAdd = {
      ...this.props.item,
      quantity: this.state.quantity,
      souse: this.state.souse,
    };

    this.props.addToCart(itemToAdd);
    this.props.history.push("/shop");
  };

  stopAndPrevent = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  };

  render() {
    const { item } = this.props;
    return (
      <div className="add-to-cart-container flex">
        <section className="add-to-cart-otpions flex justify-evenly ">
          <AmountBtn
            onAdd={this.onAdd}
            onReduce={this.onReduce}
            measure={this.props.item.measure}
            quantity={this.state.quantity}
          />
          {item.souses && (
            <MarinadaSelect
              chosenSouse={this.state.souse}
              souses={item.souses}
              sousePrice={item.sousePrice}
              onSouseChange={this.onSouseChange}
            />
          )}
        </section>

        {/* {item.souses && (
          <section className="souses">
            <label forname="souses">מרינדה</label>
            <select
              name="souses"
              id="souses"
              value={this.state.souse || ""}
              onClick={this.stopAndPrevent}
              onChange={this.onSouseChange}
            >
              {item.souses.map((souse, idx) => (
                <option key={souse} value={souse}>
                  {souse} {idx !== 0 && `${item.sousePrice}+`}
                </option>
              ))}
            </select>
          </section>
        )} */}
        {/* <button onClick={this.onAddToCart}>הוסף לעגלה</button> */}

        <AddToCartBtn onAddToCart={this.onAddToCart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export const AddToCart = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_AddToCart)
);
