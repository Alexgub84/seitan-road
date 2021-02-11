import React from "react";

export function PaymentDetails({ onNextClick, total, supply }) {
  return (
    <div className="payment">
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
          <p>
            <div> נא להעביר את התשלום לאיה </div>
            <div> למספר 054-369-0088</div>
          </p>
        </div>
        <div>
          <h2>מזומן</h2>
          <p>
            <div> לא להעביר את התשלום במזומן</div>
            <div> בעת קבלת המשלוח</div>
          </p>
        </div>
        <div>
          <h2>העברה בנקאית</h2>
          <p>
            <div> נא להעביר את התשלום לפי הפרטים הבאים:</div>
            <div> לפקודת: איה בנק:</div>
            <div> סניף: מספר חשבון:</div>
          </p>
        </div>
      </section>
      <button className="btn" onClick={onNextClick}>
        להשלמת הרכישה
      </button>
    </div>
  );
}
