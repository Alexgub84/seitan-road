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
      console.log("state:\n" + JSON.stringify(state));
      console.log("groupToSave:\n" + JSON.stringify(action.groupToSave));
      return {
        ...state,
        groups: [...state.groups, action.groupToSave],
      };
    default:
      return state;
  }
}
