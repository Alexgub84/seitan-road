import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Cart } from "../cmps/Cart";

import { CustomerDetails } from "../cmps/Checkout/CustomerDetails/CustomerDetails";
import { PaymentDetails } from "../cmps/Checkout/PaymentDetails";
import { OrderCompleteMessage } from "../cmps/Checkout/OrderCompleteMessage";

import { saveCustomerDetails, emptyCart } from "../store/actions/userActions";
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
  };

  componentDidMount() {
    console.log({ locationState: this.props.location.state });

    if (this.props.customerDetails) {
      this.setState({ customerDetails: this.props.customerDetails });
    }
    if (this.props.location.state === "nav" && this.state.currStage !== 0) {
      this.setState({ currStage: 0 });
      console.log("cart clicked from nav");
    }
  }
  componentDidUpdate(prevProps) {
    console.log({ locationStateUpdate: this.props.location.state });

    if (prevProps !== this.props) {
      if (this.props.location.state === "nav" && this.state.currStage !== 0) {
        this.setState({ currStage: 0 });
        console.log("cart clicked from nav");
      }
    }
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
    this.onNextClick();
  };

  onNextClick = () => {
    if (this.state.currStage === 1) {
      if (_.isEmpty(this.props.supply)) {
        return alert("בבקשה בחרו את שיטת המשלוח");
      }
    }

    // const currStage = this.state.currStage + 1;
    this.setState({ currStage: this.state.currStage + 1 }, async () => {
      console.log({ stageAfter: this.state.currStage });
      if (this.state.currStage === 3) {
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
        order.paymentType = "מזומן";
        await this.props.saveOrder(order);
        this.props.emptyCart();
      }
    });
  };

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
    this.onNextClick();
  };

  renderSwitch = (_) => {
    switch (this.state.currStage) {
      case 0:
        return <Cart onNextClick={this.onNextClick} />;
      case 1:
        return (
          <CustomerDetails
            onSaveDetails={this.onSaveDetails}
            customerDetails={this.state.customerDetails}
            settings={this.props.settings}
          />
        );

      case 2:
        return (
          <PaymentDetails
            onNextClick={this.onNextClick}
            total={this.props.total}
            supply={this.props.supply}
          />
        );
      case 3:
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
    cart: state.userReducer.cart,
    total: state.userReducer.total,
    supply: state.userReducer.supply,
    settings: state.settingsReducer.settings,
  };
};

const mapDispatchToProps = {
  saveCustomerDetails,
  loadSettings,
  saveOrder,
  emptyCart,
};

export const Checkout = connect(mapStateToProps, mapDispatchToProps)(_Checkout);
