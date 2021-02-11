import React from 'react'
import { ItemQuantity } from "./ItemQuantity";

export  function CartItem({item,idx}) {
    return (
      <li key={idx} className="cart-item flex justify-between">
        <img src={item.imgUrl} alt="seitan-img" />

        <section className="cart-item-info">
          <span>{item.name}</span>
          {item.souse && <span> {item.souse}</span>}
          <h4>{item.size}</h4>
        </section>
        <h3>₪{item.price}</h3>
        <h3>₪{item.price}</h3>

        <section className="flex">
          <button onClick={() => this.onUpdateQuantity(item, +1)}>+</button>
          <ItemQuantity measure={item.measure} quantity={item.quantity} />
          <button onClick={() => this.onUpdateQuantity(item, -1)}>-</button>
        </section>
        <span>{this.getTotalPriceForItem(item)}</span>
        <button onClick={() => this.props.deleteItem(item)}>X</button>
      </li>
    );
}
