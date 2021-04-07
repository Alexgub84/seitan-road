import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CartList } from "./CartList";
import { FreeShipmentBar } from "./FreeShipmentBar";
import { CartBtnMobile } from "../CartBtnMobile";

export function CartPreview({ total }) {
  const [isOpen, setOpen] = useState("false");

  const handleToggle = () => {
    console.log('clicked');
    setOpen(!isOpen);
  };
  function clicked(){
    console.log('workinggg');
  }

  if (total === 0) {
    return (
      <div className="cart close">
        <CartBtnMobile />
        <FreeShipmentBar />
        <section className="items-container">
          <h3>סיכום הזמנה</h3>
          <div className="cart-items-list">
            <h3>העגלה ריקה</h3>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className={`cart ${isOpen ? "open" : "close"}`}>
      <div onClick={()=>clicked()}>
      <CartBtnMobile
        onToggle={clicked()}
      />
      </div>
      
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
