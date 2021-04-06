import React from "react";
import { NavLink } from "react-router-dom";

import { CartList } from "./CartList";
import { FreeShipmentBar } from "./FreeShipmentBar";

export function CartPreview({ total }) {
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
