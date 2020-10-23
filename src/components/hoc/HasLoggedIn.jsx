import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function (ComposedComponent) {
  const HasLoggedIn = (props) => {
    const { profile } = useContext(GlobalContext);
    const [isAuthenticated, setIsAuthenticated] = useState();

    useEffect(() => {
      if (profile) {
        setIsAuthenticated(true);
      } 
      else {
        setIsAuthenticated(false);
      }
    }, [profile]);

    useEffect(() => {
      if (!profile) {
        props.history.push("/login");
      }
    }, [profile, props.history]);

    return <>{isAuthenticated ? <ComposedComponent {...props} /> : null}</>;
  };
  return HasLoggedIn;
}
