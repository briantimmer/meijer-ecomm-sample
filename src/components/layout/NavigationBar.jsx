import React, { useContext, Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Badge } from "reactstrap";
import GlobalContext from "../../context/GlobalContext";
import { formatAsCurrency } from '../../util/formatAsCurrency';

export const NavigationBar = (props) => {
  const { profile, cartItems, cartTotal } = useContext(GlobalContext);

  return (
    <Fragment>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand onClick={() => props.history.push("/")}>Meijer Produce</NavbarBrand>
          <Nav className="justify-content-end hide-desktop" navbar>
            <NavItem>
              <NavLink onClick={() => props.history.push("/cart")}>
                {cartItems.length > 0 && <Badge color="secondary">{formatAsCurrency(cartTotal)}</Badge>}
                <FontAwesomeIcon icon={Icons.faShoppingCart} />
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;