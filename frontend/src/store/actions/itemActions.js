import { itemService } from "../../services/itemService.js";

export function loadItems() {
  return (dispatch) => {
    itemService.query().then((items) => {
      dispatch({ type: "SET_PRODUCTS", items });
    });
  };
}
