import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/Product.css";
import { ProductConsumer } from "./contexts/context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="card">
        <ProductConsumer>
          {(context) => (
            <div>
              <div
                className="img-view"
                onClick={() => {
                  context.handeDetail(id);
                }}
              >
                <Link to="/detail">
                  <img src={img} alt="product" className="img" />
                </Link>
                <div>
                  <button
                    className="button"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      context.addToCart(id);
                      context.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="in-cart" disabled>
                        {" "}
                        ADDED TO CART
                      </p>
                    ) : (
                      <p className="icon">ADD TO CART</p>
                    )}
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <p className="title">{title}</p>
                <br />
                <span className="price">${price}</span>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
