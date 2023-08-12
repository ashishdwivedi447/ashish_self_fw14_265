import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import {Navigate} from "react-router-dom"

const RequireAuth = ({children}) => {
    const isAuth=useSelector((store)=>store.Authreducer.isAuth)
  //  console.log(isAuth);
  
    if(!isAuth){
        return <Navigate to="/login/" />
    }
    else{
      return children
    }
  
    
  
}

export default RequireAuth