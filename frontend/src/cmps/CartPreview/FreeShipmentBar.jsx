import React, { Component } from "react";
import { connect } from "react-redux";

class _FreeShipmentBar extends Component {
  state = {
    txt: "",
    innerStyle: {
      display: "none",
    },
  };
  componentDidMount() {
    const { total } = this.props;
    const { freeDeliveryPrice } = this.props.settings;
    if (total !== 0) {
      const innerStyle = {
        width: `${(total / freeDeliveryPrice) * 100}%`,
      };
      const txt = ` עוד ₪ ${freeDeliveryPrice - total} והמשלוח עלינו!  `;
      this.setState({ innerStyle, txt });
    }
  }
  componentDidUpdate(prev) {
    if (this.props === prev) return;
    const { total } = this.props;
    const { freeDeliveryPrice } = this.props.settings;
    const innerStyle = {};
    let totalPercentage = (total / freeDeliveryPrice) * 100;
    const txt = ` עוד ₪${freeDeliveryPrice - total} והמשלוח עלינו!  `;

    if (totalPercentage >= 100) {
      this.setState({ txt: `משלוח חינם!` });
      innerStyle.backgroundColor = "green";
    }
    innerStyle.width = `${totalPercentage}%`;
    this.setState({ innerStyle, txt });
  }
  render() {
    return (
      <section className="free-shipment-container flex align-center justify-around">
        <div className="free-shipment-txt1"> {this.state.txt}</div>
        <div className="free-shipment-bar ">
          <div className="inner-container" style={this.state.innerStyle}>
            <img
              src={require("../../assets/icons/delivery.svg")}
              alt="delivery"
            />
          </div>
        </div>
        <div className="free-shipment-txt2">
          סכום המשלוח יקבע סופית לאחר בחירת שיטת המשלוח
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.userReducer.total,
    settings: state.settingsReducer.settings,
  };
};

export const FreeShipmentBar = connect(mapStateToProps)(_FreeShipmentBar);
