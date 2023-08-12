//Create the HOC for protected Routes

import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import {Navigate, useLocation, useNavigate} from "react-router-dom"
const ReqAuth = ({children}) => {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    const location=useLocation()
    if(!isAuth){
        return <Navigate to="/login/" state={{from:location}} replace/>
    }
    else{
      return children
    }
};

export default ReqAuth;
