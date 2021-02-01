import React from "react";

export function PaymentDetails({ onNextClick, total, supply }) {
  return (
    <div>
      <section>
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
      </section>

      <h2>בחר אמצעי תשלום</h2>
      <button className="btn" onClick={onNextClick}>
        המשך
      </button>
    </div>
  );
}
