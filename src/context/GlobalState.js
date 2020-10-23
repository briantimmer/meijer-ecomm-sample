import React, { Component } from "react";
import _ from 'lodash';
import GlobalContext from "./GlobalContext";
import API from "../util/API";

const loginUsername = "meijer";
const loginPassword = "ecomm"

class GlobalState extends Component {
  state = {
    profile: null,
    products: [],
    cartItems: [],
    cartTotal: ''
  }

  getProducts = () => {
    API.get(API.ROUTES.GET_PRODUCTS).then((response) => {
      this.setState({ products: response });
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems;
    const existingItem = _.find(cartItems, (item) => { return item.code === product.code; });

    if (existingItem) {
      existingItem.qty += 1;
      existingItem.lineTotal = parseFloat(existingItem.price.substring(1)) * existingItem.qty;
    }
    else {
      cartItems.push({
        ...product,
        qty: 1,
        lineTotal: parseFloat(product.price.substring(1))
      });
    }

    this.setState({ cartItems });
    this.calculateCartTotal(cartItems);
  };

  removeFromCart = (item) => {
    const cartItems = this.state.cartItems.filter(cartItem => { return cartItem.code !== item.code });
    this.setState({ cartItems });
    this.calculateCartTotal(cartItems);
  };

  clearCart = () => {
    this.setState({cartItems: []});
    this.calculateCartTotal();
  };

  login = (username, password) => {
    if (username === loginUsername && password === loginPassword) {
      this.setState({
        profile: {
          id: 1,
          username: loginUsername,
          name: "Meijer Shopper"
        }
      });
      return true;
    }
    
    return false;
  };

  logout = () => {
    this.setState({
      profile: null,
      cartItems: [],
      cartTotal: ''
    });
  };

  calculateCartTotal = (cartItems) => {
    let total = 0;
    _.each(cartItems, function (item) {
      total += item.lineTotal;
    });
    this.setState({ cartTotal: total });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          profile: this.state.profile,
          products: this.state.products,
          cartItems: this.state.cartItems,
          cartTotal: this.state.cartTotal,
          getProducts: this.getProducts,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;