import React from "react";
import CartItem from "./CartItem";

const CartList = ({ context }) => {
  const { cart } = context;
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} context={context} />;
      })}
    </div>
  );
};

export default CartList;
