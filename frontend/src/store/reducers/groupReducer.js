const initialState = {
  groups: [],
};

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_GROUPS":
      return {
        ...state,
        groups: action.groups,
      };
    case "REMOVE_GROUP":
      return {
        ...state,
        groups: state.groups.filter((group) => group._id !== action.groupId),
      };
    case "SAVE_GROUP":
      return {
        ...state,
        groups: [...state.groups, action.group],
      };

    case "SET_SETTINGS":
      return {
        ...state,
        settings: action.settings,
      };

    default:
      return state;
  }
}
