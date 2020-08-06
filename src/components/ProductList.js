import React, { Component } from "react";
import Product from "./Product";
import Slideshow from "./Title";
import "../styling/Title.css";
import { ProductConsumer } from "./contexts/context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <Slideshow />
          </div>
        
          <div
            style={{
              background: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              marginLeft: "35%",
              padding: "30px",
            }}
          >
            <h2>
              <strong> FEATURED WATCHES</strong>
            </h2>
          </div>
          <div className="ui four column grid">
            <ProductConsumer>
              {(context) => {
                const { products } = context;
                return products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
