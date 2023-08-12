
import axios from "axios";
import * as types from "./actionTypes";

export const getdata=(page)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${page}`)
    .then((res)=>dispatch({type:types.GET_DATA_SUCCESS,payload:res.data.data}))
    .catch((error)=>dispatch({type:types.GET_DATA_FAILURE}))
}