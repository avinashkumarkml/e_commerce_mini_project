import thunk from "redux-thunk";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
