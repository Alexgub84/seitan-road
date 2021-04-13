import React from "react";

export function ItemQuantity({ measure, quantity }) {
  function setQuantity() {
    return measure === "unit" ? `${quantity} יח' ` : `${quantity * 100} ג'`;
  }
  return (
    <div
      className="amount"
      onClick={(ev) => {
        console.log({ evFromQuantity: ev });
      }}
    >
      {setQuantity()}
    </div>
  );
}
