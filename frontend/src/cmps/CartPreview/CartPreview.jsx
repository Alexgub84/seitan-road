import React from "react";
import { CartList } from "./CartList";

export function CartPreview({ items }) {
  return (
    <div>
      <CartList items={items} />
    </div>
  );
}
