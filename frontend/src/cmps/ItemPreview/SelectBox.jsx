import React from "react";

export function SelectBox({ souses, sousePrice, onSouseClicked }) {
  return (
    <div className="select-box">
      {souses.map((souse, idx) => (
        <div
          className="select-box-item"
          key={idx}
          value={souse}
          onClick={(ev) => onSouseClicked(ev, souse,sousePrice)}
        >
          {souse} {idx !== 0 && sousePrice !== 0 && `₪${sousePrice}`}
        </div>
      ))}
    </div>
  );
}
