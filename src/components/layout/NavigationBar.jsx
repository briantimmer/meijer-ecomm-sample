import React, { useContext, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/GlobalContext";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";

export const NavigationBar = (props) => {
  const { profile } = useContext(GlobalContext);

  return (
    <Fragment>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand onClick={() => props.history.push("/")}>Meijer</NavbarBrand>
          <Nav className="justify-content-end hide-desktop" navbar>
            <NavItem>
              <NavLink onClick={() => props.history.push("/cart")}>
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