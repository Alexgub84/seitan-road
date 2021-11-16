import React, { Component } from "react";
import { connect } from "react-redux";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { Delivery } from "../Supply/Delivery";
import { Pickup } from "../Supply/Pickup";
import { SpecialGroup } from "../Supply/SpecialGroup";
import { SupplyDate } from "../Supply/SupplyDate";

import { saveSupplyMethod } from "../../../store/actions/userActions";

class _Supply extends Component {
  state = {
    optionsCmp: null,
    btnClicked: null,
    supply: null,
  };
  async componentDidMount() {
    await this.setState({ supply: this.props.supply });
    if (!this.state.supply) return;
    this.onButtonClicked(this.state.supply.type);
  }
  onButtonClicked = (cmpName) => {
    const { delivery, pickup, specialGroup } = this.props.settings;

    const deliveryCmp = (
      <Delivery
        delivery={delivery}
        supplyDate={this.props.settings.supplyDate}
        saveSupplyMethod={this.props.saveSupplyMethod}
        chosenDelivery={this.props.supply}
      />
    );
    const pickupCmp = (
      <Pickup
        pickup={pickup}
        supplyDate={this.props.settings.supplyDate}
        saveSupplyMethod={this.props.saveSupplyMethod}
        chosenPickup={this.props.supply}
      />
    );
    const groupCmp = (
      <SpecialGroup
        specialGroup={specialGroup}
        saveSupplyMethod={this.props.saveSupplyMethod}
        chosenSpecialGroup={this.props.supply}
      />
    );

    switch (cmpName) {
      case "delivery":
        this.setState({ optionsCmp: deliveryCmp });

        break;
      case "pickup":
        this.setState({ optionsCmp: pickupCmp });
        break;
      case "specialGroup":
        this.setState({ optionsCmp: groupCmp });
        break;

      default:
        break;
    }
    this.setState({ activeCmp: cmpName, btnClicked: cmpName });
  };
  render() {
    const btnClass = "delivery-choice-btn";
    return (
      <div className="delivery-container">
        <section className="delivery-btns">
    
          <div
            className={
              `${btnClass}` +
              `${this.state.btnClicked === "delivery" ? " clicked" : ""}`
            }
            onClick={() => this.onButtonClicked("delivery")}
          >
            משלוח
          </div>
          <div
            className={
              `${btnClass}` +
              `${this.state.btnClicked === "pickup" ? " clicked" : ""}`
            }
            onClick={() => this.onButtonClicked("pickup")}
          >
            איסוף עצמי
          </div>
          <div
            className={
              `${btnClass}` +
              `${this.state.btnClicked === "specialGroup" ? " clicked" : ""}`
            }
            onClick={() => this.onButtonClicked("specialGroup")}
          >
            קבוצת רכישה
          </div>
        </section>
        {this.state.optionsCmp}
        {this.props.supply.supplyDate && (
          <SupplyDate supplyDate={this.props.supply.supplyDate} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settingsReducer.settings,
    customerDetails: state.userReducer.customerDetails,
    supply: state.userReducer.supply,
  };
};
const mapDispatchToProps = {
  saveSupplyMethod,
};

export const Supply = connect(mapStateToProps, mapDispatchToProps)(_Supply);
