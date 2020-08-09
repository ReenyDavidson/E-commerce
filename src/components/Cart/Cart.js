import React, { Component } from "react";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../contexts/context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(context) => {
            const { cart } = context;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList context={context} />
                  <CartTotals context={context} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
