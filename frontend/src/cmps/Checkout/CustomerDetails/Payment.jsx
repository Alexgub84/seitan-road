import React, { useState } from "react";

export function Payment({ onSavePayment, settings }) {
  const [payment, setPayment] = useState("");

  const handleChange = (e) => {
    setPayment(e.target.value);
    onSavePayment(e.target.value);
  };

  return (
    <React.Fragment>
      <h4>ניתן לשלם בדרכים הבאות</h4>
      <section>
      <input
        type="radio"
        name="payment"
        value="Paybox/Bit"
        id="app"
        onChange={handleChange}
      />
      <label htmlFor="app">אפליקציית Bit או Paybox</label>
      <br />

      <input
        type="radio"
        name="payment"
        value="Bank"
        id="bank"
        onChange={handleChange}
      />
      <label htmlFor="bank">העברה בנקאית</label>
      <br />

      <input
        type="radio"
        name="payment"
        value="Cash"
        id="cash"
        onChange={handleChange}
      />
      <label htmlFor="cash">מזומן</label>
      <br />
      </section>
      
      <section className="payment-info">
      {payment && <p>{settings.payment[payment]}</p>}

      </section>
      
    </React.Fragment>
  );
}
