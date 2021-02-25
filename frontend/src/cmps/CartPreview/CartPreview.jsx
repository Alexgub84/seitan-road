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
      <section>
        <h3>סיכום הזמנה</h3>
        <CartList />
      </section>
      <section>
        <div>
          <div>סך הכל:</div>
          <div>₪ {total}</div>
        </div>
        <NavLink to={{ pathname: "/checkout", state: { fromNavBar: false } }}>
          <button>לרכישה</button>
        </NavLink>
      </section>
    </div>
  );
}
