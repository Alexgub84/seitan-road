import React from "react";

export function SupplySelect({ onSupplyMethodChange }) {
  return (
    <div onChange={onSupplyMethodChange}>
      <input type="radio" name="supply" value="delivery" id="delivery" />
      <label htmlFor="delivery">משלוח</label>
      <input type="radio" name="supply" value="pickup" id="pickup" />
      <label htmlFor="pickup">איסוף עצמי</label>
      <input
        type="radio"
        name="supply"
        value="specialGroup"
        id="specialGroup"
      />
      <label htmlFor="specialGroup">קבוצת רכישה</label>
    </div>
  );
}
