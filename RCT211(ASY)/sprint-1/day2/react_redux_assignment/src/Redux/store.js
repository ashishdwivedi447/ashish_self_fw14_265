import { legacy_createStore as createStore ,combineReducers} from "redux";
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const rootreducer=combineReducers({AppReducer,AuthReducer});

export const store=createStore(rootreducer);