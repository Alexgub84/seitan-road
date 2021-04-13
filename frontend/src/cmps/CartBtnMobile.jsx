import React,{ useState } from "react";

import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

export function CartBtnMobile({onToggle}) {

  return (
    <div className="cart-toggle-mobile" onClick={onToggle}>
      <div className="img-container">
        <Arrow/>
      </div>
      <div className="white-block">סל קניות</div>
    </div>
  );
}
