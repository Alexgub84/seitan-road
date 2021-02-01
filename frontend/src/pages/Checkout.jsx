import React, { Component } from "react";
import { connect } from "react-redux";

import { Cart } from "../cmps/Cart";

import { CustomerDetails } from "../cmps/Checkout/CustomerDetails/CustomerDetails";
import { PaymentDetails } from "../cmps/Checkout/PaymentDetails";
import { OrderCompleteMessage } from "../cmps/Checkout/OrderCompleteMessage";

import { saveCustomerDetails } from "../store/actions/userActions";
import { loadSettings } from "../store/actions/settingsActions";
import { saveOrder } from "../store/actions/orderActions";

class _Checkout extends Component {
  state = {
    currStage: 0,
    customerDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: null,
      town: "",
      street: "",
    },
  };

  componentDidMount() {
    if (this.props.customerDetails) {
      this.setState({ customerDetails: this.props.customerDetails });
    }
  }

  onNextClick = async () => {
    const currStage = this.state.currStage + 1;
    this.setState({ currStage });
    if (this.state.currStage === 2) {
      const order = {};
      order.items = this.props.cart.map((item) => {
        const container = {};
        container.itemId = item._id;
        container.quantity = item.quantity;
        return container;
      });
      order.customerDetails = this.props.customerDetails;
      order.supply = this.props.supply;
      await this.props.saveOrder(order);
    }
  };
  handleChange = ({ target }) => {
    const field = target.name;
    if (target.type === "number") var value = +target.value;
    else if (target.type === "checkbox") value = target.checked;
    else value = target.value;

    this.setState((prevState) => {
      return {
        ...prevState,
        customerDetails: {
          ...prevState.customerDetails,
          [field]: value,
        },
      };
    });
    this.props.saveCustomerDetails(this.state.customerDetails);
  };
  render() {
    let checkoutSection;
    switch (this.state.currStage) {
      case 0:
        return (checkoutSection = <Cart onNextClick={this.onNextClick} />);
      case 1:
        return (checkoutSection = (
          <CustomerDetails
            onNextClick={this.onNextClick}
            handleChange={this.handleChange}
            customerDetails={this.state.customerDetails}
            settings={this.props.settings}
          />
        ));
      case 2:
        return (checkoutSection = (
          <PaymentDetails
            onNextClick={this.onNextClick}
            total={this.props.total}
            supply={this.props.supply}
          />
        ));
      case 3:
        return (checkoutSection = <OrderCompleteMessage />);
    }

    return <div>{checkoutSection}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    customerDetails: state.userReducer.customerDetails,
    cart: state.userReducer.cart,
    total: state.userReducer.total,
    supply: state.userReducer.supply,
    settings: state.settingsReducer.settings,
  };
};

const mapDispatchToProps = { saveCustomerDetails, loadSettings, saveOrder };

export const Checkout = connect(mapStateToProps, mapDispatchToProps)(_Checkout);
