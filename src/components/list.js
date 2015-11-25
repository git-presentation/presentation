import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

@Radium
export default class List extends Component {
  render() {
    return (
      <ul style={[this.context.styles.components.list, getStyles.call(this), this.props.style]}>
        {this.props.children}
      </ul>
    );
  }
}

List.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

List.contextTypes = {
  styles: PropTypes.object
};
