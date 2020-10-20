import React, { Component, Fragment } from "react";
import NavigationBar from "./NavigationBar";

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