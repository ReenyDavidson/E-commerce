import React, { Component } from "react";
import Product from "./Product";
import Slideshow from "./Title";
import SearchField from "./searchfield";
import "../styling/Title.css";
import { ProductConsumer } from "./contexts/context";

export default class ProductList extends Component {
  constructor() {
    super()

    this.state = {
      searchBox: ''
    }
  };

  handleChange = (e) => {
    this.setState({searchBox: e.target.value})
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <Slideshow />
          </div>
        
          <div class="watch-section-title">
            <h2>
              <strong> FEATURED WATCHES</strong>
            </h2>
          </div>
          <SearchField placeholder="search items" handleChange={this.handleChange}/>
          <div className="product-container">
            <ProductConsumer>
              {(context) => {
                const { products } = context;
                const { searchBox } = this.state;
                const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchBox.toLowerCase()))
                return filteredProducts.map((product) => {
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
