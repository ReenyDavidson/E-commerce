import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/Product.css";
import { ProductConsumer } from "./contexts/context";
import StarRatings from 'react-star-ratings';

export default class Product extends Component {
  constructor(props) {
    super(props);

  this.changeRating = this.changeRating.bind(this);
    this.state = { 
      rating: 4
    };
  }


  changeRating(newRating) {
      this.setState({
        rating: newRating
      });
    }

  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="card">
        <ProductConsumer>
          {(context) => (
            <div>
              <div
                className="img-view"
                onClick={() => {
                  context.handeDetail(id);
                }}
              >
                <Link to="/detail">
                  <img src={img} alt="product" className="img" />
                </Link>
                <div>
                  <button
                    className="button"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      context.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="in-cart" disabled>
                        {" "}
                        Added to cart
                      </p>
                    ) : (
                      <p className="icon">ADD TO CART</p>
                    )}
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <p className="title">{title}</p>
                <br />
                <span className="price">${price}</span>
                  <div className="star-rating">
                      <StarRatings
                        
                        starRatedColor="gold"
                        
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        rating={this.state.rating}
                        changeRating={this.changeRating}
                        starHoverColor="yellow"
                />        
            </div>
            
              </div>
              
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
