import React, { useContext, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Badge,
} from "reactstrap";
import GlobalContext from "../../context/GlobalContext";
import { formatAsCurrency } from "../../util/formatAsCurrency";
import logo from "../../logo.svg";

/**
 * Main navigation for the site.
 * @param {object} props
 */
export const NavigationBar = (props) => {
  const { profile, cartItems, cartTotal, logout } = useContext(GlobalContext);

  /**
   * Function to clear the profile in state and redirect the customer to the
   * login page
   */
  const logoutProfile = () => {
    try {
      logout();
      props.history.push("/login");
    } catch (err) {
      window.location.href = "/login";
    }
  };

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand
            onClick={() => props.history.push("/")}
            alt="Meijer Produce"
            className="logo"
          >
            <img src={logo} alt="Meijer Produce" />
          </NavbarBrand>
          <Nav className="justify-content-end" navbar>
            {profile ? (
              <>
                <NavItem>
                  <NavLink onClick={() => props.history.push("/cart")}>
                    {cartItems.length > 0 && (
                      <small className="mr-1 cart-total">
                        <Badge color="success" pill>
                          {formatAsCurrency(cartTotal)}
                        </Badge>
                      </small>
                    )}
                    <FontAwesomeIcon icon={Icons.faShoppingCart} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logoutProfile}>
                    <FontAwesomeIcon icon={Icons.faSignOutAlt} />
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink onClick={() => props.history.push("/login")}>
                  <FontAwesomeIcon icon={Icons.faSignInAlt} />
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
