import axios from "axios";
import * as types from "./actionTypes";


export const getTodos=()=>(dispatch)=>{
    dispatch({type:types.GET_TODOS_REQUEST})
    return axios.get("http://localhost:8080/todos")
    .then((res)=>dispatch({type:types.GET_TODOS_SUCCESS,payload:res.data}))
    .catch((error)=>dispatch({type:types.GET_TODOS_FAILURE}))
}