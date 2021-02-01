import React from "react";

export function AddToCartBtn({ onAddToCart }) {
  return (
    <div className="add-to-cart-btn" onClick={onAddToCart}>
      הוספה לסל
    </div>
  );
}
