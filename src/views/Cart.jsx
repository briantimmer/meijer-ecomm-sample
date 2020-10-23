import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Table, Card, CardBody, Button, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import GlobalContext from "../context/GlobalContext";
import { formatAsCurrency } from '../util/formatAsCurrency';

/**
 * Cart view that lists out all cart line items.
 * Displays an 'empty' message to the customer.
 * @param {object} props 
 */
export const Cart = (props) => {
  const { cartItems, cartTotal, removeFromCart, clearCart } = useContext(GlobalContext);
  const [checkoutModal, setCheckoutModal] = useState(false);

  const toggleCheckoutModal = () => setCheckoutModal(!checkoutModal);

  /**
   * Clears the cart and redirects to home
   */
  const startOverClick = () => {
    clearCart();
    props.history.push("/");
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="my-3">Cart</h3>
          {cartItems.length === 0 ? (
            <Card>
              <CardBody>
                <CardText className="text-center">Your shopping cart is empty!</CardText>
              </CardBody>
            </Card>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th colSpan='3'></th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className='cart-line-item'>
                    <td className="narrow-col">
                      <Button color='link' className='text-muted' onClick={() => removeFromCart(item)}>
                        <FontAwesomeIcon icon={Icons.faTrash} />
                      </Button>
                    </td>
                    <td className="narrow-col"><img alt={item.name} src={item.image} /></td>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.price}</td>
                    <td className="narrow-col">{item.qty}</td>
                    <td className="narrow-col">{formatAsCurrency(item.lineTotal)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan='6' className='text-right'>
                    <strong>Total: {formatAsCurrency(cartTotal)}</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan='6' className='text-right'>
                    <Button color='primary' size='lg' onClick={toggleCheckoutModal}>Checkout</Button>
                  </td>
                </tr>
              </tfoot>
            </Table>
          )}
          <Modal isOpen={checkoutModal} toggle={toggleCheckoutModal}>
            <ModalHeader toggle={toggleCheckoutModal}>Thanks for your order!</ModalHeader>
            <ModalBody className="text-center">
              <Button 
                className="my-3" 
                color='primary' 
                onClick={startOverClick}>Go pick up some more produce. <FontAwesomeIcon icon={Icons.faThumbsUp} /></Button>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}


export default Cart;
