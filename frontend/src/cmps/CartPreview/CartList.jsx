import React from "react";

import { CartItemPreview } from "./CartItemPreview";
export function CartList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return <CartItemPreview item={item} />;
      })}
    </div>
  );
}
