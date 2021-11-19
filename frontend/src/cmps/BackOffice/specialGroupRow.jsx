import React from "react";
import { fromTimeStampToDisplay } from "../../services/utils";

export function SpecialGroupRow({ specialGroup, onDelete }) {
  return (
    <div>
      <div>
        <div>
          {specialGroup.name} {fromTimeStampToDisplay(specialGroup.date)}{" "}
          <button onClick={onDelete}> מחקי</button>
        </div>
      </div>
    </div>
  );
}
