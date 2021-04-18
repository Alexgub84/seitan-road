import React from "react";

export function Marinada({ item }) {
  return (
    <React.Fragment>
      {item.souse && (
        <div className="item-souse">
        <span>מרינדה :{item.souse}</span>
        {item.sousePrice!==0 && item.souse!=="ללא מרינדה" && <span>/ {item.sousePrice}₪</span>}
        </div>
      )}
    </React.Fragment>
  );
}
