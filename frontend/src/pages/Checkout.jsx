import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Cart } from "../cmps/Checkout/Cart";

import { CustomerDetails } from "../cmps/Checkout/CustomerDetails/CustomerDetails";
import { OrderCompleteMessage } from "../cmps/Checkout/OrderCompleteMessage";

import {
  saveCustomerDetails,
  savePaymentMethod,
  emptyCart,
} from "../store/actions/userActions";
import { loadSettings } from "../store/actions/settingsActions";
import { saveOrder } from "../store/actions/orderActions";

class _Checkout extends Component {
  state = {
    currStage: 0,
    isCustDetValidated: false,
    customerDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: null,
      town: "",
      street: "",
    },
    paymentType: "",
  };

  componentDidMount() {
    if (this.props.customerDetails) {
      this.setState({ customerDetails: this.props.customerDetails });
    }
    if (this.props.location.state === "nav" && this.state.currStage !== 0) {
      this.setState({ currStage: 0 });
    }
  }
  componentDidUpdate(prevProps) {
    // if (prevProps !== this.props) {
    //   if (this.props.location.pathname === "/checkout" && this.state.currStage !== 0) {
    //     this.setState({ currStage: 0 });
    //   }
    // }
  }
  onSaveDetails = (data) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        customerDetails: {
          ...data,
        },
      };
    });
    this.props.saveCustomerDetails(this.state.customerDetails);
  };
  onSavePayment = (data) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        paymentType: data,
      };
    });
    this.props.savePaymentMethod(this.state.paymentType);
  };

  onNextClick = () => {
    if (this.state.currStage === 1) {
      if (_.isEmpty(this.props.supply)) {
        return alert("בבקשה בחרו את שיטת המשלוח");
      } else if (this.props.paymentType === "") {
        return alert("בבקשה בחרו את שיטת התשלום");
      }
    }

    this.setState({ currStage: this.state.currStage + 1 }, async () => {
      if (this.state.currStage === 2) {
        const order = {};
        order.items = this.props.cart.map((item) => {
          const container = {};
          container.itemId = item._id;
          container.name = item.name;
          container.souse = item.souse;
          container.quantity = item.quantity;
          container.measure = item.measure;
          return container;
        });
        order.customerDetails = this.props.customerDetails;
        order.supply = this.props.supply;
        order.totalPayment = this.props.total + this.props.supply.price;
        order.paymentType = this.props.paymentType;
        await this.props.saveOrder(order);
        this.props.emptyCart();
      }
    });
  };

  renderSwitch = (_) => {
    switch (this.state.currStage) {
      case 0:
        return <Cart onNextClick={this.onNextClick} total={this.props.total} />;
      case 1:
        return (
          <CustomerDetails
            onSaveDetails={this.onSaveDetails}
            onSavePayment={this.onSavePayment}
            onNextClick={this.onNextClick}
            customerDetails={this.state.customerDetails}
            settings={this.props.settings}
            total={this.props.total}
            supply={this.props.supply}
          />
        );

      case 2:
        return <OrderCompleteMessage />;
    }
  };

  render() {
    return (
      <div className="checkout-container main-container">
        {this.renderSwitch()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customerDetails: state.userReducer.customerDetails,
    paymentType: state.userReducer.paymentType,
    cart: state.userReducer.cart,
    total: state.userReducer.total,
    supply: state.userReducer.supply,
    settings: state.settingsReducer.settings,
  };
};

const mapDispatchToProps = {
  saveCustomerDetails,
  savePaymentMethod,
  loadSettings,
  saveOrder,
  emptyCart,
};

export const Checkout = connect(mapStateToProps, mapDispatchToProps)(_Checkout);
