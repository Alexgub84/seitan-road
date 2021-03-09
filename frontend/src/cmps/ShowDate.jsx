import React from "react";

export function ShowDate({ date }) {
  function formatDate() {
    var d = new Date(date);
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return `${year}-${month}-${day}`;
  }
  return <div className="date">{formatDate()}</div>;
}
