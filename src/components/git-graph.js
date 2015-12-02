import React, { Component, PropTypes } from "react";
import { GitGraph as Graph } from "../gitgraph";

export default class GitGraph extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const [template, orientation, mode] = ["blackarrow", "horizontal", "compact"];
    const gitgraph = new Graph({template, orientation, mode, canvas});

    this.props.history(gitgraph);
  }

  render() {
    return (
      <canvas ref="canvas" width="200px" height="200px"></canvas>
    );
  }
}

GitGraph.propTypes = {
  history: PropTypes.func.isRequired
};

GitGraph.defaultProps = {
  history: (gitgraph) => {
    gitgraph.branch("master");
  }
};
