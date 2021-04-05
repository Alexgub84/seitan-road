import React from "react";

import { ItemQuantity } from "../ItemQuantity";
import { AmountBtn } from "../ItemPreview/AmountBtn";

export function CartItemPreview({ item, onUpdateQuantity, onDeleteItem }) {
  return (
    <li className="cart-item flex justify-between">
      <img src={item.imgUrl} alt="seitan-img" />
      <section className="cart-item-info">
        <div className="item-name">{item.name}</div>
        {item.souse && <div className="item-souse"> {item.souse}</div>}
        <div className="item-size">{item.size}</div>
      </section>
      <section className="price-buttons">
        <h3>₪ {item.price}</h3>
        <section className="amount-container-temp flex">
          <button onClick={() => onUpdateQuantity(item, +1)}>+</button>
          <ItemQuantity measure={item.measure} quantity={item.quantity} />
          <button onClick={() => onUpdateQuantity(item, -1)}>-</button>
        </section>
      </section>
      <div className="delete-btn" onClick={() => onDeleteItem(item)}></div>
    </li>
  );
}
