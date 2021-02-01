import React, { Component } from "react";

export class FreeShipmentBar extends Component {
  state = {
    innerStyle: {
      width: `${(this.props.total / this.props.min) * 100}%`,
    },
    txt: ` עוד ${this.props.min - this.props.total} למשלוח חינם `,
  };

  componentDidUpdate(prev) {
    if (this.props === prev) return;
    const innerStyle = {};
    let totalPercentage = (this.props.total / this.props.min) * 100;
    this.setState({
      txt: ` עוד ${this.props.min - this.props.total} למשלוח חינם `,
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
      <div className="free-shipment-bar">
        <div className="inner-container" style={this.state.innerStyle}></div>
        <span> {this.state.txt}</span>
      </div>
    );
  }
}
