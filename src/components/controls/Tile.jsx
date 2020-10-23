import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Button, CardImg } from 'reactstrap';

/**
 * Product Grid Page product tile
 * @param {object} props Tile propTypes
 */
export const Tile = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src={props.image} alt={props.name} />
      <CardBody>
        <h4>{props.name}</h4>
        <strong>{props.price}</strong>
        <p className="mt-2 text-center">
          <Button onClick={props.addToCartClick}><FontAwesomeIcon icon={Icons.faPlusCircle} /> Add to Cart</Button>
        </p>
      </CardBody>
    </Card>
  )
}

Tile.propTypes = {
  /**
   * Product's name
   */
  name: PropTypes.string,
  /**
   * Product's price
   */
  price: PropTypes.string,
  /**
   * Product's image
   */
  image: PropTypes.string,
  /**
   * Product's code
   */
  code: PropTypes.number,
  /**
   * Callback function to add the product to the cart
   */
  addToCartClick: PropTypes.func
}

export default Tile;
