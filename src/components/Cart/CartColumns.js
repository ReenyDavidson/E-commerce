import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <p>PRODUCT</p>
          </div>
          <div>
            <p>NAME</p>
          </div>{" "}
          <div>
            <p>PRICE</p>
          </div>{" "}
          <div>
            <p>QTY</p>
          </div>{" "}
          <div>
            <p>DEL </p>
          </div>{" "}
          <div>
            <p>TOTAL</p>
          </div>
        </div>
      </div>
    );
  }
}
