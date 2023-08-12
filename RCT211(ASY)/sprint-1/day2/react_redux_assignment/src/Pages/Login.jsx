import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { loginfailure, loginrequest, loginsuccess } from '../Redux/AuthReducer/action';
import { createRoutesFromChildren, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [userName,setUserName]=useState("eve.holt@reqres.in");
    const [password,setpassword]=useState("cityslicka");
    const dispatch=useDispatch()
    const location=useLocation()
    const comingfrom=location.state?.from?.pathname|| "/"

    //console.log(userName)
    //console.log(password)
    const navigate=useNavigate()

    const loginpost=(payload)=>{
      dispatch(loginrequest());
      axios.post("https://reqres.in/api/login",payload)
      .then((r)=>{
          dispatch(loginsuccess(r.data.token))
          console.log(r.data)
         
              navigate("/");
       
      })
      .catch((error)=>dispatch(loginfailure(error)))
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        const payload={
            email:userName,
            password:password,
        }
       //console.log(payload);
       loginpost(payload);

    }
  return (
    <div>

        <h3>Login Page</h3>
        <form onSubmit={handlesubmit}>
        <div>
        <label>UserName</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
        </form>
       
    </div>
  )
}

export default Login