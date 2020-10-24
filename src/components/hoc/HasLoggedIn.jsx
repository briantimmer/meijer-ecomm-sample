import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

/**
 * HOC function wrapper for making sure the customer is logged in
 * @param {object} ComposedComponent
 */
export default function (ComposedComponent) {
  /**
   * Functional component that confirms the customer is logged in
   * @param {object} props
   */
  const HasLoggedIn = (props) => {
    const { profile } = useContext(GlobalContext);
    const [isAuthenticated, setIsAuthenticated] = useState();

    /**
     * Checks for profile in state and sets local state value
     * that allows children components to be loaded
     */
    useEffect(() => {
      if (profile) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, [profile]);

    /**
     * Redirects to login if there is no profile in state
     */
    useEffect(() => {
      if (!profile) {
        props.history.push("/login");
      }
    }, [profile, props.history]);

    return <>{isAuthenticated ? <ComposedComponent {...props} /> : null}</>;
  };
  return HasLoggedIn;
}
