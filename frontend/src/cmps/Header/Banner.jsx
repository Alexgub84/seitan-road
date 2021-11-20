import React, { Component } from "react";
import { connect } from "react-redux";

class _Banner extends Component {
  render() {
    return (
      <div className="banner full">
        {this.props.settings?.banner &&
          React.Children.toArray(
            this.props.settings.banner.map((item) => {
              return <div>{item}</div>;
            })
          )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    settings: state.settingsReducer.settings,
  };
};

export const Banner = connect(mapStateToProps)(_Banner);
