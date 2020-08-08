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
        
          <div className="watch-section-title">
            <h2>
              <strong> FEATURED WATCHES</strong>
            </h2>
          </div>
          < div className="product-container">
            <ProductConsumer>
              {(context) => {
                const { products } = context;
                return products.map((product) => {
                  return  <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
