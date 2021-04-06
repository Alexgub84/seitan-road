import React from "react";

import { ItemQuantity } from "../ItemQuantity";
import { AmountBtn } from "../ItemPreview/AmountBtn";

export function CartItemPreview({ item, onUpdateQuantity, onDeleteItem }) {
  return (
    <li className="cart-item flex justify-between">
      <img src={item.imgUrl} alt="seitan-img" />
      <section className="item-info">
        <section>
          <div className="item-name">{item.name}</div>
          <div className="item-size">{item.size}</div>
        </section>
        {item.souse && <div className="item-souse"> {item.souse}</div>}
      </section>
      <section className="price-amount">
        <h3>{item.price}₪</h3>
        <AmountBtn
          onAdd={() => onUpdateQuantity(item, +1)}
          onReduce={() => onUpdateQuantity(item, -1)}
          measure={item.measure}
          quantity={item.quantity}
        />
      </section>
      <div className="delete-btn" onClick={() => onDeleteItem(item)}/>
    </li>
  );
}
