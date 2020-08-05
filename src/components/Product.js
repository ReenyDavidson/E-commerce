import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/Product.css";
import { ProductConsumer } from "./contexts/context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="body">
        <div className="card">
          <div
            className="img-view"
            onClick={() => {
              console.log("detail page");
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
                  console.log("added to cart");
                }}
              >
                {inCart ? (
                  <p className="in-cart" disabled>
                    {" "}
                    Added to cart
                  </p>
                ) : (
                  <p className="icon">Add to cart</p>
                )}
              </button>
            </div>
          </div>
          <div className="card-footer">
            <p className="title">{title}</p>
            <h5>
              <span className="price">${price}</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
