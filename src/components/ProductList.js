import React, { Component } from "react";
import Product from "./Product";
import Dropdown from 'react-dropdown';
import Slideshow from "./Title";
import { ProductConsumer } from "./contexts/context";


import "../styling/Title.css";
import 'react-dropdown/style.css';


export default class ProductList extends Component {
   constructor(props) {
    super(props);

  this.changeSelectedOption = this.changeSelectedOption.bind(this);
  this.changeViewOption = this.changeViewOption.bind(this);
    this.state = { 
      selectedOption: null,
      view: null
    };
  }


  changeSelectedOption(option) {
      this.setState({
        selectedOption: option
      });
    }
    changeViewOption(selectedView) {
      this.setState({
        view: selectedView
      });
    }
  render() {


    const options = [
       "All", 'Men', 'Women', 'Children'
      ];
      const viewOptions = [
        'Grid', 'List'
      ];
    return (
      <>
        <div>
          <div>
            <Slideshow />
          </div>

          
        
          <div className="watch-section-title">
            <h2>
              <strong> FEATURED WATCHES</strong>
            </h2>
          
          </div>
            <div className="inline-flex ml">
                <div className="inline-flex">
                    <h4 className="mr">Filter</h4>
                    <span>
                    <Dropdown options={options}
                        onChange={this.changeSelectedOption} 
                        value={this.state.selectedOption} 
                        placeholder="All Watches" 
                    />
                    </span>
                    
                </div>

                 <div className="inline-flex">
                    <h4 className="mr">View</h4>
                    <span>
                    <Dropdown options={options}
                        onChange={this.changeViewOption} 
                        value={this.state.vie} 
                        placeholder="Grid" 
                    />
                    </span>
                    
                </div>
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
      </>
    );
  }
}
