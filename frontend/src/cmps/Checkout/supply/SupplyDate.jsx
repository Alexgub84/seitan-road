import React from "react";

export function SupplyDate({ supplyDate }) {
  const hebMonth = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  function getSupplyDate() {
    const date = new Date(supplyDate);
    const day = date.getDay();
    const month = hebMonth[date.getMonth()];
    const dateToDisplay = `${day} ב${month}`;
    return dateToDisplay;
  }
  return (
    <React.Fragment>
      <p>המשלוח יהיה מוכן בתאריך {getSupplyDate()}</p>
    </React.Fragment>
  );
}
  