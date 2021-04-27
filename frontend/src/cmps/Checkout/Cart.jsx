import React from "react";
import { NavLink } from "react-router-dom";

import { FreeShipmentBar } from "../CartPreview//FreeShipmentBar";
import { CartList } from "../CartPreview/CartList";
import { TotalAndNextAction } from "../CartPreview/TotalAndNextAction";

export function Cart({ total, onNextClick }) {
  if (total === 0) {
    return (
      <div className="cart empty">
        <h2>העגלה ריקה</h2>
        <NavLink to="/shop">
          <div className="back-button">חזרה לחנות</div>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="cart">
      <section>
        <div className="only-desktop ">
          <CartList />
        </div>
        <NavLink to="/shop">
          <div className="back-button">חזרה לחנות</div>
        </NavLink>
      </section>
      <section className="shipment-total">
        <FreeShipmentBar />
        <section className="items-container only-mobile ">
          <CartList />
        </section>
        <TotalAndNextAction total={total} onNextClick={onNextClick} />
      </section>
    </div>
  );
}
