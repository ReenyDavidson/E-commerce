
import React, { Component } from "react";
import Product from "./Product";
import Slideshow from "./Title";
import SearchField from "./searchfield";
import Dropdown from 'react-dropdown';
import "../styling/Title.css";
import { ProductConsumer } from "./contexts/context";

export default class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchBox: ''
    }
  };
  
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

  handleChange = (e) => {
    this.setState({searchBox: e.target.value})
  };
  render() {
     const options = [
       "All", 'Men', 'Women', 'Children'
      ];
      const viewOptions = [
        'Grid', 'List'
      ];
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

