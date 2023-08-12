
import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import axios from "axios";


export const getData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get("https://mocktwelve.herokuapp.com/jobs")
    .then((res)=>dispatch({type:types.GET_DATA_SUCCESS,payload:res.data}))
    .then((error)=>dispatch({type:types.GET_DATA_FAILURE}))

}


export const postdata=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_DATA_REQUEST})
    axios.post("https://mocktwelve.herokuapp.com/jobs",payload)
    .then((res)=>dispatch({
       type:types.POST_DATA_SUCCESS,payload:res.data
    }))
    .then(getData())
    .then((error)=>dispatch({type:types.POST_DATA_FAILURE}))
}