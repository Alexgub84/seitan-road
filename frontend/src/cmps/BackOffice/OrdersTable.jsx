import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

export function OrdersTable({ orders, removeOrder }) {
  const columns = [
    {
      field: "idx",
      headerName: "#",
      width: 70,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 130,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
    },
    {
      field: "itemsCount",
      headerName: "Items ",
      width: 100,
    },
    {
      field: "supplyCity",
      headerName: "Supply city",
      width: 200,
    },
    {
      field: "supplyType",
      headerName: "Supply type",
      width: 200,
    },
    {
      field: "supplyDate",
      headerName: "Supply date",
      width: 200,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => (
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            const res = window.confirm(
              "Are you sure you want to delete this item?"
            );
            if (res) {
              removeOrder(params.row.id);
            }
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const rows = orders.map((order, idx) => ({
    id: order._id,
    idx: idx + 1,
    firstName: order.customerDetails.firstName,
    lastName: order.customerDetails.lastName,
    itemsCount: order.items.length,
    supplyType: order.supply.type,
    supplyDate: _formatDate(order.supply.supplyDate),
    supplyCity: order.supply.name,
  }));

  function _formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="orders-table" style={{ height: 400, width: "100%" }}>
      {console.log(rows)}
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
