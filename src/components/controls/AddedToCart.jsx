import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from 'reactstrap';

export const AddedToCart = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="img-fluid" src={props.image} alt={props.name} />
        </Col>
        <Col>
          <div className="mb-2">
            <h5>{props.name}</h5>
            <strong>{props.price}</strong>
          </div>
          <Button block color='primary' onClick={props.goToCartClick}><FontAwesomeIcon icon={Icons.faShoppingCart} /> View Cart</Button>
          <Button block color='secondary' onClick={props.continueShoppingClick}>Continue Shopping</Button>
        </Col>
      </Row>
    </Container>
  )
}

AddedToCart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  continueShoppingClick: PropTypes.func,
  goToCartClick: PropTypes.func
}

export default AddedToCart;
