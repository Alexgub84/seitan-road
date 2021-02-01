import { loadFromStorage, saveToStorage } from "../../services/storageService";
import userService from "../../services/userService";

export function addToCart(item) {
  return (dispatch, getState) => {
    const { cart } = getState().userReducer;
    const existingItem = cart.find(
      (currItem) =>
        item.name === currItem.name &&
        (item.souse ? currItem.souse === item.souse : true)
    );
    if (existingItem) {
      dispatch({ type: "UPDATE_QUANTITY", item });
    } else {
      dispatch({ type: "ADD_TO_CART", item });
    }
  };
}
export function updateQuantity(item) {
  return (dispatch) => dispatch({ type: "UPDATE_QUANTITY", item });
}
export function deleteItem(item) {
  return (dispatch, getState) => {
    const { cart } = getState().userReducer;
    const idx = cart.findIndex(
      (currItem) =>
        item.name === currItem.name &&
        (item.souse ? currItem.souse === item.souse : true)
    );
    dispatch({ type: "DELETE_ITEM", idx });
  };
}
export function emptyCart() {
  return (dispatch) => dispatch({ type: "EMPTY_CART" });
}
export function saveCustomerDetails(details) {
  return (dispatch) => dispatch({ type: "SAVE_CUSTOMER_DETAILS", details });
}
export function saveSupplyMethod(supply) {
  return (dispatch) => dispatch({ type: "SAVE_SUPPLYֹֹֹ_METHOD", supply });
}

//Login
export function login(userCreds) {
  return async (dispatch) => {
    const user = await userService.login(userCreds);
    dispatch({ type: "SET_USER", user });
  };
}

export function logout() {
  return async (dispatch) => {
    await userService.logout();
    dispatch({ type: "SET_USER", user: null });
  };
}
