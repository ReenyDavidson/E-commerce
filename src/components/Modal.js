import React, { Component } from "react";
import { ProductConsumer } from "./contexts/context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <div>
        {" "}
        <ProductConsumer>
          {(context) => {
            const { modalOpen, closeModal } = context;
            const { img, title, price } = context.modalProduct;

            if (!modalOpen) {
              return null;
            } else {
              return (
                <div
                  style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ background: "white", padding: "5%" }}>
                    <div className="header">ITEM ADDED TO CART</div>
                    <div className="image content">
                      <img src={img} className="image" alt="modalImage" />
                      <div className="description">
                        <p>{title}</p>
                        <p>PRICE : ${price}</p>
                      </div>
                      <Link to="/">
                        <button
                          className="ui primary basic button"
                          onClick={() => closeModal()}
                        >
                          CONTINUE SHOPPING
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="ui positive basic button"
                          onClick={() => closeModal()}
                        >
                          {" "}
                          GO TO CART
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
