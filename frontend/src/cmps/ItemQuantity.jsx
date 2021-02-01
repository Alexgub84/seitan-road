import React from "react";

export function ItemQuantity({ measure, quantity }) {
  function setQuantity() {
    if (quantity === 0) {
      return measure === "unit" ? `יחידות` : `משקל`;
    } else {
      return measure === "unit" ? `${quantity} יח' ` : `${quantity * 100} ג'`;
    }
  }
  return <div className="amount">{setQuantity()}</div>;
}
