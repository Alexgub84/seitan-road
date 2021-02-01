import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { itemReducer } from "./reducers/itemReducer";
import { userReducer } from "./reducers/userReducer";
import { settingsReducer } from "./reducers/settingsReducer";
import { orderReducer } from "./reducers/orderReducer";

const rootReducer = combineReducers({
  itemReducer,
  userReducer,
  settingsReducer,
  orderReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
