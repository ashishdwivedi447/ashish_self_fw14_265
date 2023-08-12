import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input,Button} from '@chakra-ui/react'

const Adminlogin = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handlelogin=()=>{
     if(email==="admin@gmail.com" && password==="masai"){
        navigate("/admin");
     }
    }
  return (
    <div >
         <div style={{display:"flex" ,flexDirection:"column" ,gap:"10px", alignItems:"center"}}>
            <label htmlFor="">Login</label>
            <div>
                <Input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
                <Input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <Button style={{width:"179px"}} onClick={handlelogin} bg="red" colorScheme="white">Login</Button>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin