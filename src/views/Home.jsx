import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import GlobalContext from "../context/GlobalContext";
import Tile from "../components/controls/Tile";
import AddedToCart from "../components/controls/AddedToCart";
import pluralize from "pluralize";

/**
 * Main home view that displays the Product Grid.
 * @param {object} props
 */
export const Home = (props) => {
  const { products, getProducts, addToCart } = useContext(GlobalContext);
  const [addedToCartModal, setAddedToCartModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState();

  /**
   * Calls in the context method to pull in products
   */
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  /**
   * Adds a product to the cart and opens the Added To Cart modal
   * @param {object} product Product to be added to the cart
   */
  const addProductToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    toggleAddedToCartModal();
  };

  const handleViewCartClick = () => props.history.push("/cart");

  const toggleAddedToCartModal = () => setAddedToCartModal(!addedToCartModal);

  return (
    <Container>
      <Row>
        <Col>
          {products.length === 0 ? (
            <div className="mt-4 text-center">
              <FontAwesomeIcon icon={Icons.faSpinner} spin /> Picking the
              produce...
            </div>
          ) : (
            <>
              <h4 className="my-3">Pick your produce!</h4>
              <CardDeck>
                {products.map((product, index) => (
                  <Tile
                    key={index}
                    addToCartClick={() => addProductToCart(product)}
                    {...product}
                  />
                ))}
              </CardDeck>
            </>
          )}
          {addedProduct && (
            <Modal isOpen={addedToCartModal} toggle={toggleAddedToCartModal}>
              <ModalHeader toggle={toggleAddedToCartModal}>
                Yum! You're picking up some {pluralize(addedProduct.name)}!
              </ModalHeader>
              <ModalBody>
                <AddedToCart
                  continueShoppingClick={toggleAddedToCartModal}
                  goToCartClick={handleViewCartClick}
                  {...addedProduct}
                />
              </ModalBody>
            </Modal>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
