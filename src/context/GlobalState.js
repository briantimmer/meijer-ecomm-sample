import React, { Component } from "react";
import GlobalContext from "./GlobalContext";
import API from "../util/API";

class GlobalState extends Component {
  state = {
    profile: {},
    products: []
  }

  getProducts = () => {
    API.get(API.ROUTES.GET_PRODUCTS).then((response) => {
      this.setState({ products: response });
    });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          profile: this.state.profile,
          products: this.state.products,
          getProducts: this.getProducts,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;