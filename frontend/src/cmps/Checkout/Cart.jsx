import React from "react";
import { NavLink } from "react-router-dom";

import { FreeShipmentBar } from "../CartPreview//FreeShipmentBar";
import { CartList } from "../CartPreview/CartList";
import { TotalAndNextAction } from "../CartPreview/TotalAndNextAction";

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
      <section>
        <CartList />
        <NavLink to="/shop">
          <div className="back-button">חזרה לחנות</div>
        </NavLink>
      </section>
      <section className="shipment-total">
        <FreeShipmentBar />
        <TotalAndNextAction total={total} />
      </section>
    </div>
  );
}
