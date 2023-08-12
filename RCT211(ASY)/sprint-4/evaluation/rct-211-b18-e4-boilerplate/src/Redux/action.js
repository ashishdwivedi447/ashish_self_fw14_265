//Write the action creator functions here

import axios from "axios";
import * as types from "./actionTypes";


const getproducts=()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
    return axios.get("http://localhost:8080/products")
      .then((res)=>dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:res.data}))
      .catch((error)=>dispatch({type:types.GET_PRODUCTS_FAILURE}))
}

const addproducts=(productdata)=>(dispatch)=>{
    dispatch({type:types.ADD_PRODUCT_REQUEST})
    return axios.post("http://localhost:8080/products",productdata)
    .then((res)=>dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:res.data}))
    .then(dispatch(getproducts()))
    .catch((error)=>dispatch({type:types.ADD_PRODUCT_FAILURE}))
}

const updateproducts = (payload, id) => (dispatch) => {
    console.log(payload, id);
    dispatch({ type: types.EDIT_PRODUCT_REQUEST });
    return axios
      .patch(`http://localhost:8080/products/${id}`, payload)
      .then((res) =>
        dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: res.data })
      )
      .catch((error) => dispatch({ type: types.GET_PRODUCTS_FAILURE }));
  };
  


export {getproducts,addproducts,updateproducts}