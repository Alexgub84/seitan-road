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
    order.items.map(async (item) => {
      obj[`${item.name}${item.souse ? "+" + item.souse : ""}`] = item.quantity;
    });
    return obj;
  });
  function setKitchenData() {
    const kitchenData = [];
    const souses = [];
    //souses names array
    const isSouses = (item) => "souses" in item;
    const idx = items.findIndex(isSouses);
    for (let i = 0; i < items[idx].souses.length; i++) {
      const souse = items[idx].souses[i];
      souses.push(souse);
    }
    const gramsTitles = [];
    //grams quantites array
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      order.items.forEach((item) => {
        if (item.measure === "gram") {
          gramsTitles.push(item.quantity);
        }
      });
    }
    gramsTitles.sort((a, b) => a - b);

    for (let i = 0; i < items.length; i++) {
      const currItem = items[i];
      const obj = {};
      obj["Product"] = currItem.name;
      obj["Total Grams"] = 0;
      obj["Total Units"] = 0;

      souses.forEach((souse) => {
        obj[souse] = 0;
      });

      gramsTitles.forEach((gram) => {
        obj[`${gram * 100} grams`] = 0;
      });

      orders.forEach((order) => {
        order.items.forEach((item) => {
          if (item.name === currItem.name) {
            //gramsTitles or units count
            switch (item.measure) {
              case "gram":
                obj["Total Grams"] += item.quantity * 100;
                gramsTitles.forEach((gram) => {
                  obj[`${gram * 100} grams`] +=
                    item.quantity === gram ? item.quantity : 0;
                });
                break;
              case "unit":
                obj["Total Units"] += item.quantity;
                souses.forEach((souse) => {
                  obj[souse] += item.souse === souse ? item.quantity : 0;
                });

                break;
              default:
                break;
            }
          }
        });
      });

      kitchenData.push(obj);
    }
    for (let i = 0; i < kitchenData.length; i++) {
      const obj = kitchenData[i];
      for (const key in obj) {
        if (obj[key] == 0) obj[key] = null;
      }
    }
    return kitchenData;
  }

  const exportCSV = () => {
    const ws_Delivery = XLSX.utils.json_to_sheet(deliveryData);
    const ws_Kitchen = XLSX.utils.json_to_sheet(setKitchenData());
    const wb = {
      Sheets: { Delivery: ws_Delivery, Kitchen: ws_Kitchen },
      SheetNames: ["Delivery", "Kitchen"],
    };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      <button onClick={() => exportCSV()}>Export</button>
    </div>
  );
}
