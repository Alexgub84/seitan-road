import React from "react";

export function OrderPreview({ order, idx, removeOrder }) {
  return (
    <div className="order-preview">
      <span>{idx + 1}</span>
      <span>{order.items.length}</span>
      <span>{order.supply.name}</span>
      <button onClick={() => removeOrder(order._id)}>מחק</button>
    </div>
  );
}
