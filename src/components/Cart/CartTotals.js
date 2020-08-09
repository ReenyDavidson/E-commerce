import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ context }) => {
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
                  backgroundColor: "white",
                  color: "black",
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
