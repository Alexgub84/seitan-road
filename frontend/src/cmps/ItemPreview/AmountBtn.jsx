import React from "react";

import { ReactComponent as AddLogo } from "../../assets/icons/add.svg";
import { ReactComponent as ReduceLogo } from "../../assets/icons/reduce.svg";

import { ItemQuantity } from "../ItemQuantity";

export function AmountBtn({ onAdd, onReduce, measure, quantity }) {
  return (
    <div className="amount-btn-container flex">
      <div className="plus-btn amount-btn" onClick={onAdd}>
        <AddLogo />
      </div>
      <ItemQuantity
        measure={measure}
        quantity={quantity}
        
      />
      <div className="minus-btn amount-btn" onClick={onReduce}>
        <ReduceLogo />
      </div>
    </div>
  );
}
