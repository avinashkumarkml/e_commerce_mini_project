import thunk from 'redux-thunk'
import {legacy_createStore,applyMiddleware} from "redux";
import { productRenderer } from "./Products/reducer";

const store = legacy_createStore(productRenderer, applyMiddleware(thunk))

export {store}