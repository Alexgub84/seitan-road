import React from "react";

export function SupplySelect({ onSupplyMethodChange }) {
  return (
    <div onChange={onSupplyMethodChange}>
      <input
        type="radio"
        name="supply"
        value="deliveryAndPickup"
        id="deliveryAndPickup"
      />
      <label htmlFor="deliveryAndPickup"> משלוח ואיסוף עצמי</label>

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
