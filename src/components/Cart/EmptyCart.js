import React from "react";

const EmptyCart = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>CART IS CURRENTLY EMPTY</h1>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
