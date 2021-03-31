import React from "react";

export function AddToCartBtn({ onAddToCart }) {
  return (
    <div className="add-to-cart-btn" onClick={onAddToCart}>
      הוספה לסל
      <div className="img-container">
        <img src={require("../../assets/icons/addToCart.svg")} />
      </div>
    </div>
  );
}
