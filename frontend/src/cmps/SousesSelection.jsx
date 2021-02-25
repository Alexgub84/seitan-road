import React from "react";

export default function SousesSelection() {
  return (
    <section className="souses">
      <label for="souses">מרינדה</label>
      <select
        name="souses"
        id="souses"
        onClick={this.stopAndPrevent}
        onChange={this.onSouseChange}
      >
        {React.Children.toArray(
          item.souses.map((souse) => <option value={souse}>{souse}</option>)
        )}
      </select>
    </section>
  );
}
