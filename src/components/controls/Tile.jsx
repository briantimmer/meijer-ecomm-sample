import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Button, CardImg } from 'reactstrap';

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
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  code: PropTypes.number,
  addToCartClick: PropTypes.func
}

export default Tile;
