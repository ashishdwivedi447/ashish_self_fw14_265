import * as types from "./actionTypes"

import axios from "axios"


const getData=()=>(dispatch)=>{
    dispatch({type:types.GET_COUNTRIES_REQUEST})
    axios.get("http://localhost:8080/countries")
    .then((r)=>dispatch({type:types.GET_COUNTRIES_SUCCESS,payload:r.data}))
    .catch((error)=>dispatch({type:types.GET_COUNTRIES_FAILURE}))
}

export {getData}