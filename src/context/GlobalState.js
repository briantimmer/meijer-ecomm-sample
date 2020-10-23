import React, { Component } from "react";
import _ from 'lodash';
import GlobalContext from "./GlobalContext";
import API from "../util/API";

const loginUsername = "meijer";
const loginPassword = "ecomm"

/**
 * Context API state properties and functions
 */
class GlobalState extends Component {
  state = {
    profile: null,
    products: [],
    cartItems: [],
    cartTotal: ''
  }

  /**
   * GET products JSON from Meijer endpoint and save to state.
   */
  getProducts = () => {
    API.get(API.ROUTES.GET_PRODUCTS).then((response) => {
      this.setState({ 
        products: response.map(product => { 
          return {
            ...product,
            cleanPrice: parseFloat(product.price.substring(1))
          }
        })
      });
    });
  };

  /**
   * Adds product to the cart. If it already exists we just increase it's quantity.
   * @param {object} product Product to be added to the cart
   */
  addToCart = (product) => {
    const cartItems = this.state.cartItems;
    const existingItem = _.find(cartItems, (item) => { return item.code === product.code; });

    if (existingItem) {
      existingItem.qty += 1;
      existingItem.lineTotal = existingItem.cleanPrice * existingItem.qty;
    }
    else {
      cartItems.push({
        ...product,
        qty: 1,
        lineTotal: product.cleanPrice
      });
    }

    this.setState({ cartItems });
    this.calculateCartTotal(cartItems);
  };

  /**
   * Removes the cart line item from the cart and re-calculates the cart total.
   * @param {object} item Cart line item to be removed
   */
  removeFromCart = (item) => {
    const cartItems = this.state.cartItems.filter(cartItem => { return cartItem.code !== item.code });
    this.setState({ cartItems });
    this.calculateCartTotal(cartItems);
  };

  /**
   * Clears the cart details.
   */
  clearCart = () => {
    this.setState({cartItems: []});
    this.calculateCartTotal([]);
  };

  /**
   * Auth profile by username and password (mocked)
   * @param {string} username Username of the profile logging in
   * @param {string} password Password of the profile logging in
   */
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

  /**
   * Clears entire profile and cart related state items
   */
  logout = () => {
    this.setState({
      profile: null,
      cartItems: [],
      cartTotal: ''
    });
  };

  /**
   * Calculates the total cost of the items in the cart
   * @param {array} cartItems Cart line items
   */
  calculateCartTotal = (cartItems) => {
    this.setState({ 
      cartTotal: _.sumBy(cartItems, function(item) { return item.lineTotal; })
    });
  };

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