import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const CartTotals = ({ context, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = context;
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "lightcoral",
        }}
      >
        <div>
          <div>
            <Link to="/">
              <button
                type="button"
                onClick={() => clearCart()}
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                CLEAR CART
              </button>
            </Link>
            <h5>
              <span>SUBTOTAL :</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span>TAX :</span>
              <strong>${cartTax}</strong>
            </h5>{" "}
            <h5>
              <span>TOTAL :</span>
              <strong>${cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
