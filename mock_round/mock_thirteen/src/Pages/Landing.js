import React, { useState } from 'react'
import { Box ,Text,Input,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  let arr=JSON.parse(localStorage.getItem("sinup")) ||[];
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [emailauth,setEmailauth]=useState("")
  const [passwordauth,setPasswordauth]=useState("");
  const navigate=useNavigate();


  const handlesignup=()=>{
let signup={
  name:name,
  email:email,
  password:password,
}

arr.push(signup);
localStorage.setItem("sinup" ,JSON.stringify(arr));
  }

  const handlesignin=()=>{
for(let i=0;i<arr.length;i++){
  if(emailauth==arr[i].email && passwordauth==arr[i].password){
navigate("/user");
  }
 
}
  }
  return (
    <Box>
<Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="380px" margin="auto" marginTop="50px">
  <Text fontSize="20px" margin="5px 0 0 38%">Sign up</Text>
  <Box display="flex" flexDirection="column" gap="15px" padding="10px 30px 20px 40px" >
    <Box>
      <Text>Name</Text>
      <Input placeholder='Enter You Full Name' w="300px" onChange={(e)=>setName(e.target.value)}/>
    </Box>
    <Box>
      <Text>Email</Text>
      <Input placeholder='Enter Email' w="300px" onChange={(e)=>setEmail(e.target.value)}/>
    </Box>
    <Box>
      <Text>Password</Text>
      <Input placeholder='Enter Password'  w="300px"onChange={(e)=>setPassword(e.target.value)}/>
    </Box>
    <Box>
      <Button colorScheme="red" w="300px" onClick={handlesignup}>Sign up</Button>
    </Box>
  </Box>
</Box>

<Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="380px" margin="auto" marginTop="50px">
  <Text fontSize="20px" margin="5px 0 0 38%">Sign in</Text>
  <Box display="flex" flexDirection="column" gap="15px" padding="10px 30px 20px 40px" >
   
    <Box>
      <Text>Email</Text>
      <Input placeholder='Enter Email' w="300px" onChange={(e)=>setEmailauth(e.target.value)} />
    </Box>
    <Box>
      <Text>Password</Text>
      <Input placeholder='Enter Password'  w="300px" onChange={(e)=>setPasswordauth(e.target.value)} />
    </Box>
    <Box>
      <Button colorScheme="red" w="300px" onClick={handlesignin}>Sign in</Button>
    </Box>
  </Box>
</Box>
    </Box>
  )
}

export default Landing