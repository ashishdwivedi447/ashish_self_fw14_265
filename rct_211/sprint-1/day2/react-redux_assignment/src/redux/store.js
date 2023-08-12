import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import { authReduser } from "./Auth/auth.reduser";
import { counterReduser } from "./counter/counter.reduser";
import { todosReduser } from "./Todo/todos.reduser";

const rootReduser=combineReducers({
 counter:counterReduser,
 todos: todosReduser,
 auth:authReduser
})
const loger1=store=>next=>action=>{
    console.log("logger1 middlewear")
    next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReduser,composeEnhancers(applyMiddleware(loger1)))