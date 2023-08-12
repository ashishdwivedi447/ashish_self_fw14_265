import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {Navigate,useLocation} from "react-router-dom"

const ReqAuth = ({children}) => {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    // const location=useLocation()
    console.log(isAuth);
  
       if(!isAuth){
       return <Navigate to="/login" />
       }
       else{
        return children
       }
        
       

       
    }

export default ReqAuth