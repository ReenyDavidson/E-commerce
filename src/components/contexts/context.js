import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = { products: storeProducts, details: detailProduct };

  handleDetail = () => {
    console.log("handle detail");
  };

  addToCart = () => {
    console.log("add to cart");
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handeDetail: this.handleDetail,
            addToCart: this.addToCart,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
