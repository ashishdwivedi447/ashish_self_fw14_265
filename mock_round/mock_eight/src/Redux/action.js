import axios from "axios";
import * as types from "./actionTypes";


const postData=(formdata)=>(dispatch)=>{
   dispatch({type:types.POST_HOTEL_REQUEST})
   axios.post("http://localhost:8085/hotels",formdata)
   .then((res)=>dispatch({type:types.POST_HOTEL_SUCCESS ,payload:res.data}))
   .catch((error)=>dispatch({type:types.POST_HOTEL_FAILURE}))
}

export {postData}