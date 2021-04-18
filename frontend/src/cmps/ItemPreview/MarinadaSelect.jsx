import React from "react";
import { SelectBox } from "./SelectBox";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";


export class MarinadaSelect extends React.Component {
  state = {
    isDropDownShown: false,
  };
  onToggleDropDown = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({ isDropDownShown: !this.state.isDropDownShown });
  };
  onSouseClicked = (ev, souse,sousePrice) => {
    this.onToggleDropDown(ev);
    this.props.onSouseChange(souse);
  };
  render() {
    const { souses, sousePrice, chosenSouse, onSouseChange } = this.props;
    return (
      <div
        className="marinada-select-container flex"
        onClick={(ev) => this.onToggleDropDown(ev)}
      >
        <div className="marinada-select-btn">
         <Arrow/>
        </div>
        <div className="marinada-select-selected">
          {chosenSouse || "מרינדה"}
        </div>
        {this.state.isDropDownShown && (
          <SelectBox
            chosenSouse={chosenSouse}
            souses={souses}
            sousePrice={sousePrice}
            onSouseClicked={this.onSouseClicked}
          />
        )}
      </div>
    );
  }
}
