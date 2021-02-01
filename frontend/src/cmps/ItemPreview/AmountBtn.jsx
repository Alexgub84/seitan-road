import React from "react";

import { ItemQuantity } from "../ItemQuantity";

export function AmountBtn({ onAdd, onReduce, measure, quantity }) {
  return (
    <div className="amount-container flex">
      <div className="plus-btn amount-btn" onClick={onAdd}>
        <div className="symbol">+</div>
        {/* <div className="plus-vertical"></div>
        <div className="plus-horisontal"></div> */}
      </div>
      <ItemQuantity measure={measure} quantity={quantity} />
      <div className="minus-btn amount-btn" onClick={onReduce}>
        <div className="symbol">-</div>
        {/* <div className="minus"></div> */}
      </div>
    </div>
  );
}
