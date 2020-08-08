<<<<<<< HEAD
import React, { Component } from "react";
import Product from "./Product";
import Dropdown from 'react-dropdown';
import _ from 'lodash';
import { Range } from 'react-range';
import Slideshow from "./Title";
import { ProductConsumer } from "./contexts/context";


import "../styling/Title.css";
import 'react-dropdown/style.css';
import PriceRange from "./PriceRange";


export default class ProductList extends Component {
   constructor(props) {
    super(props);

  this.changeSelectedOption = this.changeSelectedOption.bind(this);
  this.changeViewOption = this.changeViewOption.bind(this);
  this.handlePriceRange = this.handlePriceRange.bind(this);


    this.state = { 
      selectedOption: null,
      view: null,
      sortColumn:{path:"price", order: 'asc'},
      values:[0]
    };
  }

  handlePriceRange(values){
      this.setState({ values })
  }  
 


  changeSelectedOption(path) {
    const sortColumn = {...this.state.sortColumn};
    if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === "asc" ? "desc":"asc";
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        };
        this.setState({sortColumn, selectedOption:path})
    }


    changeViewOption(selectedView) {
      this.setState({
        view: selectedView
      });
    }

    
  render() {



      const {selectedOption, sortColumn , values} = this.state

    const options = [
       "All", 'price', 'gender', 'brand'
      ];
      const viewOptions = [
        'Grid', 'List'
      ];
      //const filtered = selectedOption  && selectedOption.value !== "All" ? allCharacter.filter(character=>character.gender === selectedOption.value): allCharacter;
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
            <div className="justify-between ml">
                <div className="inline-flex">
                    <h4 className="mr">Sort By</h4>
                    <span>
                    <Dropdown options={options}
                        onChange={this.changeSelectedOption} 
                        value={selectedOption} 
                        placeholder="All Watches" 
                    />
                    </span>
                    
                </div>

                 <div className="inline-flex ">
                    <h4 className="mr ">Filter</h4>
                    <span>
                    <PriceRange
                        values={values}
                        priceChange={this.handlePriceRange}
                       />
                       <div>
                          <p>Find Items  less than {values}</p>
                       </div>
                       
                    </span>
                    
                </div>
            </div>
          
           
          < div className="product-container">
            <ProductConsumer>
              {(context) => {
                const { products } = context;
                console.log("products", products)
                const filtered = values  && values[0] !== 0 ? products.filter(product=>product.price <= values[0]): products;
                console.log(filtered)
                const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
                console.log(sorted)
                return sorted.map((product) => {
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
=======
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
>>>>>>> dbed42415288fb570e1305f533fe81e0cc063d83
