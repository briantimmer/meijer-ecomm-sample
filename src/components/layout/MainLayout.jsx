import React, { Component, Fragment } from "react";
import NavigationBar from "./NavigationBar";

/**
 * Main screen layout wrapper that pulls in common navigation
 */
class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar {...this.props.children.props} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default MainLayout;
