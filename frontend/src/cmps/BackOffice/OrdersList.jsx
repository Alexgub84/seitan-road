import React from "react";

import { OrderPreview } from "./OrderPreview";
//todo -delete
export function OrdersList({ orders, removeOrder }) {
  return (
    <div className="orders-list flex ">
      {orders.map((order, idx) => (
        <OrderPreview
          order={order}
          key={order._id}
          idx={idx}
          removeOrder={removeOrder}
        />
      ))}
    </div>
  );
}
