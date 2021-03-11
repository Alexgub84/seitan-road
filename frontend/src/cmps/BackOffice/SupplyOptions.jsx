import React, { Component } from "react";
import Select from "react-select";
import { ShowDate } from "../ShowDate";
export function SupplyOptions({ settings, supplyType, handleSupplyChosen }) {
  const options = settings[supplyType].map((item) => ({
    value: item.supplyDate,
    // label: `${item.name} ${item.supplyDate} `,
  }));
  return (
    <div>
      <Select onChange={handleSupplyChosen} options={options} />
    </div>
  );
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
