import React from "react";
import { SelectBox } from "./SelectBox";
import { Component } from "react";

export class MarinadaSelect extends React.Component {
  state = {
    isDropDownShown: false,
  };
  onToggleDropDown = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({ isDropDownShown: !this.state.isDropDownShown });
  };
  onSouseClicked = (ev, souse) => {
    this.onToggleDropDown(ev);
    this.props.onSouseChange(souse);
  };
  render() {
    const { souses, sousePrice, chosenSouse, onSouseChange } = this.props;
    return (
      <div className="marinada-select-container flex">
        <div
          className="marinada-select-btn"
          onClick={(ev) => this.onToggleDropDown(ev)}
        >
          <div className="symbol">V</div>
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
