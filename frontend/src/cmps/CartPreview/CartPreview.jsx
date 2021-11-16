import React, { useState,useEffect } from "react";


import { CartList } from "./CartList";
import { FreeShipmentBar } from "./FreeShipmentBar";
import { CartBtnMobile } from "../CartBtnMobile";
import {TotalAndNextAction} from "./TotalAndNextAction"

export function CartPreview({ total,settings }) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);

  };
useEffect(() => {
  const style=isOpen?'position:fixed':'';
  document.body.setAttribute('style',style);
  return () => {
    document.body.setAttribute('style','');
  }
}, [isOpen])

  return (
    <div className={`cart ${isOpen ? "open" : "close"}`}>
      <CartBtnMobile onToggle={handleToggle} />
      <FreeShipmentBar />
      <section className="items-container">
        <h3>סיכום הזמנה</h3>
        <CartList />
        <TotalAndNextAction total={total} minTotal={settings.minTotal}/>

      </section>
    </div>
  );
}
