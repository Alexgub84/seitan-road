import React from "react";
import { ItemPreview } from "./ItemPreview";

export function ItemsList({ items }) {
  return (
    <div className="items-list flex">
      {React.Children.toArray(items.map((item) => <ItemPreview item={item} />))}
    </div>
  );
}
