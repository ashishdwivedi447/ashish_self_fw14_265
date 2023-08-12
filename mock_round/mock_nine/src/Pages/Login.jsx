import React from 'react'
import { Box, Input,Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { login } from '../Redux/Authreducer/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassWord]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handlesubmit=()=>{
        console.log(email,password)
if(email && password){
    dispatch(login({email,password}))
    .then((res)=>{
       // console.log(res)
       // navigate("/restaurant")
    })
}
    }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="500px" margin="100px 0 0 32%" padding="20px 0 30px 0">
        <Text fontSize="25px">Login Page</Text>
       <Input placeholder='Enter Email' w="400px"  onChange={(e)=>{
   setEmail(e.target.value)} }/>
       <Input placeholder='Enter Password'w="400px"onChange={(e)=>{
   setPassWord(e.target.value);
          }} />
       <Button colorScheme="pink" w="250px" type="submit" onClick={handlesubmit}>Login</Button>
    </Box>
  )
}

export default Login