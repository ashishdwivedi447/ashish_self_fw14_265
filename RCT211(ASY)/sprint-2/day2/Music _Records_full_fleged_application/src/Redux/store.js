import { legacy_createStore as createStore ,applyMiddleware ,combineReducers,compose} from "redux";

import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import thunk from "redux-thunk";

const rootreducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))