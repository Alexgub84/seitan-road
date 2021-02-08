import React from "react";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export function XSLExport({ orders, items, fileName }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const deliveryData = orders.map((order, idx) => {
    const obj = {
      "#": idx + 1,
      "First Name": order.customerDetails.firstName,
      "Last Name": order.customerDetails.lastName,
      Email: order.customerDetails.email,
      Phone: order.customerDetails.phone,
      Town: order.customerDetails.town,
      Street: order.customerDetails.street,
      "Supply type": order.supply.type,
      "Supply details": order.supply.name,
      Total: order.totalPayment,
    };
    order.items.map((item) => {
      obj[_getItemName(item.itemId)] = `${item.quantity} ${
        item.souse ? +item.souse : ""
      }`;
    });
    return obj;
  });
  const kitchenData = orders.map((order, idx) => {
    return {
      "#": idx + 1,
      "First Name": order.customerDetails.firstName,
      "Last Name": order.customerDetails.lastName,
    };
  });
  function _getItemName(id) {
    const name = items.find((item) => {
      if (item._id === id) return item.name;
    });
    console.log(name);
    return name;
  }
  function exportCSV() {
    const ws_Delivery = XLSX.utils.json_to_sheet(deliveryData);
    const ws_Kitchen = XLSX.utils.json_to_sheet(kitchenData);
    const wb = {
      Sheets: { Delivery: ws_Delivery, Kitchen: ws_Kitchen },
      SheetNames: ["Delivery", "Kitchen"],
    };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <div>
      <button onClick={() => exportCSV()}>Export</button>
    </div>
  );
}
