import React, { Component } from "react";
import { connect } from "react-redux";

class _Banner extends Component {
  state = {
    banner: "",
  };
  componentDidMount() {
    this.setState({ banner: this.props.settings.banner });
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ banner: this.props.settings.banner });
    }
  }
  render() {
    return <div className="banner full">{this.state.banner}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    settings: state.settingsReducer.settings,
  };
};

export const Banner = connect(mapStateToProps)(_Banner);
