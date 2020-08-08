import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Data";
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure();
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = { products: [], details: detailProduct };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { details: product };
    });
  };

  addToCart = (id) => {
    console.log(`add to cart ${id}`);
    toast.success('Items has bee added to cart')
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
