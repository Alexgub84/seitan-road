import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

import { CartList } from "./CartList";
import { FreeShipmentBar } from "./FreeShipmentBar";
import { CartBtnMobile } from "../CartBtnMobile";

export function CartPreview({ total }) {
  const [isOpen, setOpen] = useState("false");

  const handleToggle = () => {
    setOpen(!isOpen);
   

  };

  return (
    <div className={`cart ${isOpen ? "open" : "close"}`}>
      <CartBtnMobile onToggle={handleToggle} />
      <FreeShipmentBar />
      <section className="items-container">
        <h3>סיכום הזמנה</h3>
        <CartList />
        <section className="checkout-container">
          <div className="total">
            <div>סך הכל:</div>
            <div>₪ {total}</div>
          </div>
          <NavLink to={{ pathname: "/checkout", state: { fromNavBar: false } }}>
            <div className="checkout-btn">לרכישה</div>
          </NavLink>
        </section>
      </section>
    </div>
  );
}
