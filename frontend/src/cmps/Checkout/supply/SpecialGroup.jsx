import React, { Component } from "react";
import Select from "react-select";

export class SpecialGroup extends Component {
  state = {
    selectedOption: null,
  };

  componentDidMount() {
    if (
      !this.props.chosenSpecialGroup ||
      this.props.chosenSpecialGroup.type !== "specialGroup"
    )
      return;
    this.setState({
      selectedOption: {
        value: {
          name: this.props.chosenSpecialGroup.name,
          supplyDate: this.props.chosenSpecialGroup.supplyDate,
        },
        label: this.props.chosenSpecialGroup.name,
      },
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.saveSupplyMethod({
      type: "specialGroup",
      name: selectedOption.value.name,
      supplyDate: selectedOption.value.supplyDate,
      price: 0,
    });
  };
  render() {
    const options = this.props.specialGroup.map((item) => ({
      value: item,
      label: item.name,
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
