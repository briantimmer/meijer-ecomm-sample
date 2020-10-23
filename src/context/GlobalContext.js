import React from "react";

export default React.createContext({
  profile: null,
  products: [],
  cartItems: [],
  cartTotal: '',
  getProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  login: () => {},
  logout: () => {}
});