const initialState = {
  items: [],
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
}
