import React from "react";

/**
 * Context API create state object
 */
export default React.createContext({
  profile: null,
  products: [],
  cartItems: [],
  cartTotal: "",
  getProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  login: () => {},
  logout: () => {},
});
