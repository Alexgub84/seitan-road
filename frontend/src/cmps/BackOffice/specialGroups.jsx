import React from "react";
import { SpecialGroupRow } from "./specialGroupRow";
export function ManageSpecialGroups({ specialGroups, onDelete }) {
  return (
    <div>
      <h2>קבוצות רכישה</h2>
      <div>
        {specialGroups?.length > 0 &&
          specialGroups.map((group) => {
            return <SpecialGroupRow specialGroup={group} onDelete={onDelete} />;
          })}
      </div>
    </div>
  );
}
