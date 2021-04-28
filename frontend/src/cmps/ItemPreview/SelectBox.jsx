import React from "react";

export function SelectBox({ souses, sousePrice, onSouseClicked }) {
// function getClassName(length,idx){
// let classStr='select-box-item';
// if (idx===0){
//   classStr+=' first'
// }
// }
  return (
    <div className="select-box">
      {souses.map((souse, idx) => (
        <div
          className={`select-box-item ${souses.length-1===idx?'last':''}`}
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
