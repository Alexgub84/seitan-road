import React from "react";

import { CartList } from "./CartList";
import { FreeShipmentBar } from "../FreeShipmentBar";

export function CartPreview() {
  return (
    <div className="cart">
      <FreeShipmentBar />
      <CartList />
    </div>
  );
}
