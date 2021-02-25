import React, { Component } from "react";
import { connect } from "react-redux";

import { CartItemPreview } from "./CartItemPreview";


import {
  updateQuantity,
  deleteItem,
  emptyCart,
} from "../../store/actions/userActions";

class _CartList extends Component {
  onUpdateQuantity = (item, diff) => {
    if ((diff === -1) & (item.quantity === 1)) return;
    item.quantity += diff;
    this.props.updateQuantity({ item });
  };

  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return (
        <div className="cart">
          <h2>העגלה ריקה</h2>
        </div>
      );
    }
    return (
      <div>
        {React.Children.toArray(
          cart.map((item) => {
            return (
              <ul className="cart-items-list">
                <CartItemPreview
                  item={item}
                  onUpdateQuantity={this.onUpdateQuantity}
                  onDeleteItem={this.props.deleteItem}
                />
              </ul>
            );
          })
        )}
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
  updateQuantity,
  deleteItem,
  emptyCart,
};

export const CartList = connect(mapStateToProps, mapDispatchToProps)(_CartList);
