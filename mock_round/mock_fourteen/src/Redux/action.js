
import axios from "axios";
import * as types from "./actionTypes";

export const getdata=(num,category,difficulty)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST});
    axios.get(`https://opentdb.com/api.php?amount=${num}&category=${category}&difficulty=${difficulty}`)
    .then((res)=>dispatch({type:types.GET_DATA_SUCCESS ,payload:res.data.results}))
    .catch((error)=>dispatch({type:types.GET_DATA_FAILURE}))
}