import React from "react";

import { SpecialGroupRow } from "./specialGroupRow";
import { AddNewSpecialGroup } from "./AddNewSpecialGroup";
export function ManageSpecialGroups({
  specialGroups,
  removeGroup,
  addSpecialGroup,
}) {
  return (
    <div>
      <h2>קבוצות רכישה</h2>
      <div>
        {specialGroups?.length > 0 &&
          specialGroups.map((group) => {
            return (
              <SpecialGroupRow
                specialGroup={group}
                removeGroup={removeGroup}
                key={group.date}
              />
            );
          })}
      </div>
      <div>
        <AddNewSpecialGroup addSpecialGroup={addSpecialGroup} />
      </div>
    </div>
  );
}
