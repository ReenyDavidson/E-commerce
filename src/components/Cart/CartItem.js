import React from "react";

const CartItem = ({ item, context }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = context;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: "60px",
      }}
    >
      <div>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
        />
      </div>
      <div>{title}</div>
      <div>{price}</div>
      <div>
        <div>
          <div>
            <button
              onClick={() => decrement(id)}
              style={{
                border: "none",
                backgroundColor: "lightcoral",
                width: "15px",
                marginRight: "7px",
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => increment(id)}
              style={{
                border: "none",
                backgroundColor: "lightcoral",
                width: "15px",
                marginLeft: "7px",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <i class="trash icon" onClick={() => removeItem(id)}></i>
      </div>
      <div>
        <strong> ${total} </strong>
      </div>
    </div>
  );
};

export default CartItem;
