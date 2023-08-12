
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useLocation, useNavigate } from 'react-router-dom'
import {login} from "../Redux/AuthReducer/action"

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassWord]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const location=useLocation();

  const comingFrom=location.state?.from?.pathname || "/";
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email,password){
     dispatch(login({email,password})).then((r)=>{
       if(r.type==="LOGIN_SUCCESS"){
    navigate(comingFrom,{replace:true});  //instead of coming from we can write -1 as well like ---> navigate(-1,{replace:true})
       }
     })
    }
   }

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" value={email} onChange={(e)=>{
   setEmail(e.target.value);
          }} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" value={password} onChange={(e)=>{
   setPassWord(e.target.value);
          }} />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
