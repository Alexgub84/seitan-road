import React from "react";
import { fromTimeStampToDisplay } from "../../services/utils";

export function SpecialGroupRow({ specialGroup, removeGroup }) {
  function onDelete() {
    const res = window.confirm("Are you sure you want to delete this group?");
    if (res) {
      removeGroup(specialGroup.name);
    }
  }
  return (
    <div>
      <div>
        <div>
          {specialGroup.name} {fromTimeStampToDisplay(specialGroup.date)}{" "}
          <button onClick={onDelete}> מחקי </button>
        </div>
      </div>
    </div>
  );
}
