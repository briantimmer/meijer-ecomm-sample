import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, CardDeck, Modal, ModalHeader, ModalBody } from 'reactstrap';
import GlobalContext from "../context/GlobalContext";
import Tile from '../components/controls/Tile';
import AddedToCart from "../components/controls/AddedToCart";
import pluralize from 'pluralize';

export const Home = (props) => {
  const { products, getProducts, addToCart } = useContext(GlobalContext);
  const [addedToCartModal, setAddedToCartModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState();

  useEffect(() => {
    getProducts();
  });

  const addProductToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    toggleAddedToCartModal();
  }

  const handleViewCartClick = () => props.history.push('/cart');

  const toggleAddedToCartModal = () => setAddedToCartModal(!addedToCartModal);

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="my-3">Pick your produce!</h4>
          <CardDeck>
            {products.map((product, index) => (
              <Tile 
                key={index} 
                addToCartClick={() => addProductToCart(product)} 
                {...product} />
            ))}
          </CardDeck>
          {addedProduct && 
            <Modal isOpen={addedToCartModal} toggle={toggleAddedToCartModal}>
              <ModalHeader toggle={toggleAddedToCartModal}>Yum! You're picking up some {pluralize(addedProduct.name)}!</ModalHeader>
              <ModalBody>
                <AddedToCart 
                  continueShoppingClick={toggleAddedToCartModal} 
                  goToCartClick={handleViewCartClick}
                  {...addedProduct} />
              </ModalBody>
            </Modal>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Home;