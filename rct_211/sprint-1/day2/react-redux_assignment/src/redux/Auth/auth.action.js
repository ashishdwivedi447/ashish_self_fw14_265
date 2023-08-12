import axios from "axios"

export const LOGIN_LOADING="LOGIN_LOADING";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_ERROR="LOGIN_ERROR";


export const login=(dispatch,data)=>{
    dispatch({type:LOGIN_LOADING})

    axios.post("https://reqres.in/api/login",data).then(res=>{dispatch({type:LOGIN_SUCCESS,payload:res.data.token})}).catch(err=>dispatch({type:LOGIN_ERROR}))
}