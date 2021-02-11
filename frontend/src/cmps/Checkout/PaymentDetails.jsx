import React from "react";

export function PaymentDetails({ onNextClick, total, supply }) {
  return (
    <div className="payment main-container">
      {/* <section>
        <div>
          <span>מוצרים:</span>
          <span>{total}</span>
        </div>
        <div>
          <span>משלוח:</span>
          <span>{supply.price}</span>
        </div>
        <div>
          <span>סיכום:</span>
          <span>{total + supply.price}</span>
        </div>
      </section> */}

      <h2>ניתן לשלם בדרכים הבאות:</h2>
      <section className="payment-options">
        <div>
          <h2>אפליקציית Bit או Paybox</h2>
          <pre>נא להעביר את התשלום לאיה למספר 054-369-0088</pre>
        </div>
        <div>
          <h2>מזומן</h2>
          <pre>לא להעביר את התשלום במזומן בעת קבלת המשלוח</pre>
        </div>
        <div>
          <h2>העברה בנקאית</h2>
          <pre>
            נא להעביר את התשלום לפי הפרטים הבאים: לפקודת: איה בנק: סניף: מספר
            חשבון:
          </pre>
        </div>
      </section>
      <button className="btn" onClick={onNextClick}>
        המשך
      </button>
    </div>
  );
}
