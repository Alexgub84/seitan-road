import React from "react";

import { SpecialGroupRow } from "./specialGroupRow";
import { AddNewSpecialGroup } from "./AddNewSpecialGroup";
export function ManageSpecialGroups({
  groups = [],
  removeGroup,
  addSpecialGroup,
}) {
  return (
    <div>
      <h2>קבוצות רכישה</h2>
      <div>
        {groups.length > 0 &&
          groups.map((group) => {
            console.log(group._id);
            return (
              <SpecialGroupRow
                specialGroup={group}
                removeGroup={removeGroup}
                key={group._id}
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
