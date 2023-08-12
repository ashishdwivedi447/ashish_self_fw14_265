import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useLocation, useNavigate } from 'react-router-dom'
import {login} from "../Redux/AuthReducer/action"

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassWord]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const location=useLocation();

  //const comingFrom=location.state?.from?.pathname || "/";

  const handleSubmit=(e)=>{
   e.preventDefault()
   if(email,password){
    dispatch(login({email,password})).then((r)=>{
      if(r.type==="USER_LOGIN_SUCCESS"){
   navigate(-1,{replace:true});  //instead of coming from we can write -1 as well like ---> navigate(-1,{replace:true})
      }
    })
   }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input type="email" value={email} onChange={(e)=>{
   setEmail(e.target.value);
          }} />
        </div>
        <div>
          <label>User password</label>
          <input type="password"  value={password} onChange={(e)=>{
   setPassWord(e.target.value);
          }} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login