import React, { Component } from "react";

export class FreeShipmentBar extends Component {
  state = {
    innerStyle: {
      width: `${(this.props.total / this.props.min) * 100}%`,
    },
    txt: ` עוד ${this.props.min - this.props.total} והמשלוח עלינו!  `,
  };

  componentDidUpdate(prev) {
    if (this.props === prev) return;
    const innerStyle = {};
    let totalPercentage = (this.props.total / this.props.min) * 100;
    this.setState({
      txt: ` עוד ${this.props.min - this.props.total} והמשלוח עלינו!  `,
    });
    if (totalPercentage >= 100) {
      this.setState({ txt: `משלוח חינם!` });
      innerStyle.backgroundColor = "green";
    }
    innerStyle.width = `${totalPercentage}%`;
    this.setState({ innerStyle });
  }
  render() {
    return (
      <div className="free-shipment-container flex align-center justify-around">
        <div className="free-shipment-txt1"> {this.state.txt}</div>
        <div className="free-shipment-bar ">
          <div className="inner-container" style={this.state.innerStyle}>
            <img src={require("../assets/icons/delivery.svg")} alt="delivery" />
          </div>
        </div>
        <div className="free-shipment-txt2">
          סכום המשלוח יקבע סופית לאחר בחירת שיטת המשלוח
        </div>
      </div>
    );
  }
}
