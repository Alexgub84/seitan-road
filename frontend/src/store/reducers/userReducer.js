let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
  loggedInUser: localLoggedinUser,
  customerDetails: null,
  paymentType:'',
  cart: [],
  supply: {price:0,supplyDate:null},
  total: 0,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedInUser: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
        total:
          state.total +
          action.item.quantity *
            (action.item.price +
              (action.item.souse && action.item?.souse !== "ללא מרינדה"
                ? action.item.sousePrice
                : 0)),
      };
    case "UPDATE_QUANTITY":
      let newTotal = 0;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (
            action.item.name === item.name &&
            (action.item.souse ? action.item.souse === item.souse : true)
          )
            item.quantity += action.item.quantity;
          newTotal +=
            item.quantity *
            (item.price +
              (item.souse && item.souse !== "ללא מרינדה"
                ? item.sousePrice
                : 0));
          return item;
        }),
        total: newTotal,
      };
    case "DELETE_ITEM":
      const updatedCart = [...state.cart];
      updatedCart.splice(action.idx, 1);
      return {
        ...state,
        cart: [...updatedCart],
        total:
          state.total -
          state.cart[action.idx].quantity *
            (state.cart[action.idx].price +
              (state.cart[action.idx].souse &&
              state.cart[action.idx].souse !== "ללא מרינדה"
                ? state.cart[action.idx].sousePrice
                : 0)),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case "SAVE_CUSTOMER_DETAILS":
      return {
        ...state,
        customerDetails: { ...action.details },
      };
    case "SAVE_SUPPLYֹֹֹ_METHOD":
      return {
        ...state,
        supply: { ...action.supply },
      };
    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        paymentType: { ...action.payment },
      };

    default:
      return state;
  }
}
