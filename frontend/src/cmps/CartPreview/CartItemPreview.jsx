import React from "react";

import { AmountBtn } from "../ItemPreview/AmountBtn";

export function CartItemPreview({ item, onUpdateQuantity, onDeleteItem }) {
  return (
    <li className="cart-item flex">
      <section className="flex">
      <img src={item.imgUrl} alt="seitan-img" />
      <section className="item-info">
        <section>
          <div className="item-name">{item.name}</div>
          <div className="item-size">{item.size}</div>
        </section>
        {item.souse && <div className="item-souse"> מרינדה :{item.souse} / {item.sousePrice}₪</div>}
      </section>
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
