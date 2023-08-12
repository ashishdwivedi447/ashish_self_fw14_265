import axios from "axios";
import * as types from "./actionTypes";


export const getdata=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get("https://api.api-ninjas.com/v1/randomword")
    .then((res)=>dispatch({type:types.GET_DATA_SUCCESS,payload:res.data.word}))
    .catch((error)=>dispatch({type:types.GET_DATA_FAILURE}))
}