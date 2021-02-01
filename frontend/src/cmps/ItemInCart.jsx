import React from "react";

import { ItemQuantity } from "./ItemQuantity";

export function ItemInCart({ item }) {
  return (
    <li className="flex justify-between">
      <span>{item.name}</span>
      <span>{`${item.price}ש"ח`}</span>
      {item.souse && <span> {item.souse}</span>}
      {item.souse && <span> {`+${item.sousePrice}ש"ח`}</span>}
      <section className="flex">
        <button onClick={() => this.onUpdateQuantity(item, +1)}>+</button>
        <ItemQuantity measure={item.measure} quantity={item.quantity} />
        <button onClick={() => this.onUpdateQuantity(item, -1)}>-</button>
      </section>
      <span>{`${item.quantity * item.price}ש"ח`}</span>
      <button onClick={() => this.props.deleteItem(item)}>X</button>
    </li>
  );
}
