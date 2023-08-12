import * as types from "./actionTypes";
import axios from "axios"

// action creaters which yeilds object

const gettodoRequest=()=>{
    return {
        type:types.GET_TODO_REQUEST
    }
}

const gettodoSucesss=(payload)=>{
    return {
        type:types.GET_TODO_SUCCESS,
        payload
    }
}

const gettodoFailure=()=>{
    return {
        type:types.GET_TODO_FAILURE
    }
}

const getTodos=(dispatch)=>{
    dispatch(gettodoRequest())
    axios.get("http://localhost:8080/todos")
    .then((r)=> dispatch(gettodoSucesss(r.data)))
    .catch((error)=>dispatch(gettodoFailure(error)))
}

// const getTodos=(payload)=>(dispatch)=>{
//     dispatch(gettodoRequest())
//     axios.get("http://localhost:8080/todos")
//     .then((r)=> dispatch(gettodoSucesss(r.data)))
//     .catch((error)=>dispatch(gettodoFailure(error)))
// }                                                           // this is correct
const addtodoRequest=()=>{
    return {
        type:types.ADD_TODO_REQUEST
    }
}

const addtodoSucesss=(payload)=>{
    return {
        type:types.ADD_TODO_SUCCESS,
        payload
    }
}

const addtodoFailure=()=>{
    return {
        type:types.ADD_TODO_FAILURE
    }
}

export {gettodoRequest,gettodoSucesss,gettodoFailure,addtodoRequest,addtodoSucesss,addtodoFailure,getTodos}