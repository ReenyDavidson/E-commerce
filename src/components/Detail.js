import React, { Component } from "react";
import { ProductConsumer } from "./contexts/context";
import { Link } from "react-router-dom";
import "../styling/Detail.css";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(context) => {
          const {
            id,
            img,
            company,
            price,
            title,
            info,
            inCart,
          } = context.details;
          return (
            <div>
              <div className="title">
                <h1>{title}</h1>
              </div>
              <div className="product-info">
                <div className="container1">
                  <img src={img} alt="product" className="prod-img" />
                </div>
                <div className="line"></div>
                <div className="container2">
                  <div className="prod-author-container">
                    <h2 className="prod-author">AUTHOR: {company}</h2>
                  </div>
                  <div className="prod-price-container">
                    <h4 className="prod-price">PRICE: ${price}</h4>
                  </div>
                  <div className="prod-info-container">
                    <p className="prod-info">
                      <strong>{info}</strong>
                    </p>
                  </div>
                  <div>
                    <button
                      className="button1"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        context.addToCart(id);
                      }}
                    >
                      {inCart ? "ADDED TO CART" : "ADD TO CART"}
                    </button>
                  </div>
                  <div>
                    <Link to="/">
                      <button className="button2">BACK TO HOME PAGE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
