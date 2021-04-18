import React from "react";

import { AmountBtn } from "../ItemPreview/AmountBtn";
import { Marinada } from "./Marinada";

export function CartItemPreview({ item, onUpdateQuantity, onDeleteItem }) {
  function getTotalPrice(item) {
    const total =
      item.quantity *
      (item.price +
        (item.souse && item?.souse !== "ללא מרינדה" ? item.sousePrice : 0));
    return total;
  }
  return (
    <li className="cart-item flex">
      <section className="flex">
        <img className="item-img" src={item.imgUrl} alt="seitan-img" />
        <section className="item-info">
          <section>
            <div className="item-name">{item.name}</div>
            <div className="item-size">{item.size}</div>
          </section>
          <Marinada item={item} />
        </section>
      </section>

      <section className="price-amount">
        <h4>{getTotalPrice(item)}₪</h4>
        <AmountBtn
          onAdd={() => onUpdateQuantity(item, +1)}
          onReduce={() => onUpdateQuantity(item, -1)}
          measure={item.measure}
          quantity={item.quantity}
        />
      </section>
      <div className="delete-btn" onClick={() => onDeleteItem(item)}>
        <img src={require("../../assets/icons/delete.svg")} />
      </div>
    </li>
  );
}
