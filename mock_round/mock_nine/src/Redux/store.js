import { legacy_createStore as createStore ,applyMiddleware ,combineReducers,compose} from "redux";

import {reducer as Appreducer} from "./Appreducer/reducer";
import {reducer as Authreducer} from "./Authreducer/reducer"
import thunk from "redux-thunk";

const rootreducer=combineReducers({Appreducer,Authreducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))