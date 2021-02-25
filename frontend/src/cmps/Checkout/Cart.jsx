import React from "react";
import { FreeShipmentBar } from "../CartPreview//FreeShipmentBar";
import { CartList } from "../CartPreview/CartList";

export function Cart({ total }) {
  if (total === 0) {
    return (
      <div className="cart">
        <h2>העגלה ריקה</h2>
      </div>
    );
  }
  return (
    <div className="cart">
      <FreeShipmentBar />
      <CartList />
    </div>
  );
}
