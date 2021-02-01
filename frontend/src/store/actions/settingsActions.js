import { settingsService } from "../../services/settingsService.js";

export function loadSettings() {
  return async (dispatch) => {
    const settings = await settingsService.query();
    dispatch({ type: "SET_SETTINGS", settings });
  };
}
export function saveSettings(settings) {
  return async (dispatch) => {
    console.log("Actions:", settings);
    const settingsToSave = await settingsService.save(settings);
    dispatch({ type: "SET_SETTINGS", settingsToSave });
  };
}
