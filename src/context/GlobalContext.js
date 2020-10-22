import React from "react";

export default React.createContext({
  profile: {},
  products: [],
  cartItems: [],
  cartTotal: '',
  getProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});