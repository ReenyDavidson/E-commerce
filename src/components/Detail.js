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
            <React.Fragment>
            
            <div className="card-detail">
            <h1 className="title">{title}</h1>
              <div className="product-info">
                <div className="container1">
                  <img src={img} alt="product" className="prod-img" />
                </div>
                {/*<div className="line"></div>*/}
                <div className="container2">
                    <h2 className="prod-author">{company}</h2>
                    <h4 className="prod-price">${price}</h4>
                 
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

                </div>
              </div>
            </div>
            <div className="prod-info-container">
                    <p className="prod-info">
                      <strong>{info}</strong>
                    </p>
                  </div>
                  
                    <Link to="/" className="button2">
                     BACK TO HOME PAGE
                    </Link>
                  
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}
