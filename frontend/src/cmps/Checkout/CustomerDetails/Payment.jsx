import React from "react";

export function Payment({ onSavePayment,settings }) {
  const handleChange=(e)=>{
    console.log(e.target.value);
    onSavePayment(e.target.value)
  }
 
  return (
    <div className="payment">
      <p>ניתן לשלם בדרכים הבאות</p>
      <input
        type="radio"
        name="payment"
        value="Paybox/Bit"
        id="app"
        onChange={handleChange}
      />
      <label for="app">אפליקציית Bit או Paybox</label>
      <br />

      <input
        type="radio"    
        name="payment"
        value="Bank"
        id="bank"
        onChange={handleChange}
      />
      <label for="bank">העברה בנקאית</label>
      <br />

      <input
        type="radio"
        name="payment"
        value="Cash"
        id="cash"
        onChange={handleChange}
      />
      <label for="cash">מזומן</label>
      <br />
    </div>
  );
}
