// NOTE: use this store variable to create a store.
import { legacy_createStore as createStore ,applyMiddleware,compose,combineReducers } from "redux";

import { reducer as AppReducer } from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import thunk from "redux-thunk"

const rootReducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
