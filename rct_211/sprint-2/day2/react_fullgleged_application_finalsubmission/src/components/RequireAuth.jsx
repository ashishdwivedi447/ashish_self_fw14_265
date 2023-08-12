import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import {Navigate, useLocation, useNavigate} from "react-router-dom"

const RequireAuth = ({children}) => {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    const location=useLocation()
    if(!isAuth){
        return <Navigate to="/login/" state={{from:location}} replace/>
    }
  return children
    
  
}

export default RequireAuth