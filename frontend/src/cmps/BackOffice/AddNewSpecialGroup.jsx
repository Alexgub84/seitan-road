import React from "react";
import { TextField } from "@material-ui/core";
import { fromTimeStampToDisplay } from "../../services/utils";

export function AddNewSpecialGroup({ addSpecialGroup }) {
  return (
    <div>
      <h2>הוספת קבוצת רכישה חדשה</h2>
      <form onSubmit={addSpecialGroup}>
        <section>
          <label htmlFor="name">שם העיר</label>
          <input type="text" id="name" />
        </section>
        <section>
          <TextField
            id="date"
            name="date"
            label="delivery"
            type="date"
            format="dd/MM/yyyy"
            defaultValue={fromTimeStampToDisplay(Date.now())}
            //   onChange={(ev) => this.handleChange(ev)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </section>
        <button>שמרי</button>
      </form>
    </div>
  );
}
