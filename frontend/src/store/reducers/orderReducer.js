const initialState = {
  orders: [],
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ORDERS":
      return {
        ...state,
        orders: action.orders,
      };
    case "REMOVE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.orderId),
      };
    default:
      return state;
  }
}
