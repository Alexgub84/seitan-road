import React, { Component } from "react";
import Select from "react-select";

import { utils } from "../../services/utils";
export class SupplyOptions extends Component {
  state = {
    selectedOption: null,
  };
  componentDidMount() {
    this.setChosenSupplyType();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.setChosenSupplyType();
  }
  setChosenSupplyType = (_) => {
    const { settings, supplyType } = this.props;
    console.log({ supplyTypeFromPropsis: supplyType });
    var options = [];
    switch (supplyType) {
      case "specialGroup":
        options = settings[supplyType].map((item) => ({
          value: item.supplyDate,
          label: `${item.name} ${utils.formatDate(item.supplyDate)}`,
        }));
        break;
      case "deliveryAndPickup":
        options = [
          {
            value: settings.supplyDate,
            label: `${utils.formatDate(settings.supplyDate)} `,
          },
        ];
        break;
      default:
        break;
    }
    this.setState({ options });
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.handleSupplyChosen(selectedOption.value);
  };
  //   setOptions() {
  //     var options = [];
  //     switch (supplyType) {
  //       case "specialGroup":
  //         options = settings[supplyType].map((item) => ({
  //           value: item.supplyDate,
  //           label: `${item.name} ${utils.formatDate(item.supplyDate)}`,
  //         }));
  //         break;
  //       case "deliveryAndPickup":
  //         options = [
  //           {
  //             value: settings.supplyDate,
  //             label: `${utils.formatDate(settings.supplyDate)} `,
  //           },
  //         ];
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  render() {
    return (
      <div>
        <Select
          value={this.state.selectedOption}
          options={this.state.options}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// export class SupplyOptions extends Component {
//   state = {
//     selectedOption: null,
//   };

//   componentDidMount() {
//     if (!this.props.chosenPickup || this.props.chosenPickup.type !== "pickup")
//       return;
//     this.setState({
//       selectedOption: {
//         value: {
//           name: this.props.chosenPickup.name,
//         },
//         label: this.props.chosenPickup.name,
//       },
//     });
//   }
//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//     this.props.saveSupplyMethod({
//       type: "pickup",
//       name: selectedOption.value,
//       supplyDate: this.props.supplyDate,
//       price: 0,
//     });
//   };
//   render() {
//     const options = this.props.pickup.map((item) => ({
//       value: item,
//       label: item,
//     }));
//     return (
//       <div>
//         <Select
//           value={this.state.selectedOption}
//           onChange={this.handleChange}
//           options={options}
//         />
//       </div>
//     );
//   }
// }
