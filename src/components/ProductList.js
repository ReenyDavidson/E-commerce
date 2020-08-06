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
         <div>something might be here</div>
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
              <strong> FEATURED WATCHES.</strong>
            </h2>
            {/* <SearchField placeholder="search items" handleChange={this.handleChange}/> */}
          </div>
          <SearchField placeholder="search items" handleChange={this.handleChange}/>
          <div className="ui four column grid">
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
