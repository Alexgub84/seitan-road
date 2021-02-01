import React, { Component } from "react";
import Select from "react-select";

export class Pickup extends Component {
  state = {
    selectedOption: null,
  };

  componentDidMount() {
    if (!this.props.chosenPickup || this.props.chosenPickup.type !== "pickup")
      return;
    this.setState({
      selectedOption: {
        value: {
          name: this.props.chosenPickup.name,
        },
        label: this.props.chosenPickup.name,
      },
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.saveSupplyMethod({
      type: "pickup",
      name: selectedOption.value,
      supplyDate: this.props.supplyDate,
      price: 0,
    });
  };
  render() {
    const options = this.props.pickup.map((item) => ({
      value: item,
      label: item,
    }));
    return (
      <div>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
