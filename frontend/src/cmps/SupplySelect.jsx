import React from "react";
import Select from "react-select";

export function SupplySelect({ settings, onSupplyMethodChange }) {
  return (
    <div>
      <form>
        <input
          type="radio"
          name="supply"
          value="delivery"
          id="delivery"
          onChange={onSupplyMethodChange}
        />
        <label htmlFor="delivery">משלוח</label>
        <input
          type="radio"
          name="supply"
          value="pickup"
          id="pickup"
          onChange={onSupplyMethodChange}
        />
        <label htmlFor="pickup">איסוף עצמי</label>
        <input
          type="radio"
          name="supply"
          value="specialGroup"
          id="specialGroup"
          onChange={onSupplyMethodChange}
        />
        <label htmlFor="specialGroup">קבוצת רכישה</label>
      </form>
      {/* <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
      /> */}
    </div>
  );
}
