//Write the ActionCreator functions here

import * as types from "./actionType";
import axios from "axios"

export const getWatch=(params)=>(dispatch)=>{
    dispatch({type:types.GET_WATCHES_DATA_REQUEST})
    return axios.get("http://localhost:8080/watches",params)
    .then((r)=>dispatch({type:types.GET_WATCHES_DATA_SUCCESS,payload:r.data}))
    .catch((error)=>dispatch({type:types.GET_WATCHES_DATA_FAILURE}))
}