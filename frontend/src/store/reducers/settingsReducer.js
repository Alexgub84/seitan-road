const initialState = {
  settings: [],
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        settings: action.settings,
      };
    default:
      return state;
  }
}
