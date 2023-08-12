
import * as types from "./actionTypes";
import axios from "axios";

const getData=(page,sort,filter)=>(dispatch)=>{
    dispatch({type:types.GET_RESTURANT_REQUEST})
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20&sort=rating&order=${sort}&filter=${filter}`)
    .then((res)=>dispatch({type:types.GET_RESTURANT_SUCCESS,payload:res.data.data}))
    .catch((error)=>dispatch({type:types.GET_RESTURANT_FAILURE}))
}


export {getData}