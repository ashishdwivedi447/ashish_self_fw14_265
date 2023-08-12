import React, { useState } from 'react'
import { Box ,Input ,Button, position} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { postdata } from '../Redux/action'

let postarr=[];

const Jobform = () => {

    const [company,setCompany]=useState("")
    const [position,setPosition]=useState("")
    const [contract,setContract]=useState("")
    const [location,setLocation]=useState("")
    const dispatch=useDispatch();



    const handlesubmit=()=>{
        const payload={
            company:company,
            position:position,
            contract:contract,
            location:location,
        }
        postarr.push(payload)
        localStorage.setItem("postData" ,JSON.stringify(postarr));

        dispatch(postdata(payload));
    }
  return (
    <Box>
<Box display="flex" flexDirection="column" gap="25px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="440px" margin="auto" marginTop="60px" padding="20px 30px 20px 30px" borderRadius="10px">
    <Box>
        <Input placeholder='Enter Company Name' w="380px" onChange={(e)=>setCompany(e.target.value)}/>
    </Box>
   
    <Box>  
        <Input placeholder='Enter Position' w="380px" onChange={(e)=>setPosition(e.target.value)}/> 
    </Box>
    <Box>
    <Input placeholder='Enter Contract' w="380px" onChange={(e)=>setContract(e.target.value)}/>
    </Box>
    <Box>
    <Input placeholder='Enter Loaction' w="380px" onChange={(e)=>setLocation(e.target.value)} />
    </Box>
    <Box>
        <Button colorScheme="green" w="380px" onClick={handlesubmit} >Submit</Button>
    </Box>
</Box>
    </Box>
  )
}

export default Jobform