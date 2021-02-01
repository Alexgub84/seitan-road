import React, { Component } from "react";
import Select from "react-select";

export class Delivery extends Component {
  state = {
    selectedOption: null,
  };
  componentDidMount() {
    if (
      !this.props.chosenDelivery ||
      this.props.chosenDelivery.type !== "delivery"
    )
      return;
    this.setState({
      selectedOption: {
        value: {
          name: this.props.chosenDelivery.name,
          price: this.props.chosenDelivery.price,
        },
        label: `${this.props.chosenDelivery.name} (${this.props.chosenDelivery.price}ש"ח) `,
      },
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.saveSupplyMethod({
      type: "delivery",
      name: selectedOption.value.name,
      supplyDate: this.props.supplyDate,
      price: selectedOption.value.price,
    });
  };
  render() {
    const options = this.props.delivery.map((item) => ({
      value: item,
      label: `${item.name} (${item.price}ש"ח) `,
    }));
    return (
      <div>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        {this.state.selectedOption &&
          this.state.selectedOption.value.citiesList && (
            <div>
              הישובים בקטגוריה הנ"ל:
              {this.state.selectedOption.value.citiesList.map((city, idx) => (
                <span>{idx === 0 ? `${city}, ` : city}</span>
              ))}
            </div>
          )}
      </div>
    );
  }
}
