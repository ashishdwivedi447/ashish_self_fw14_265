import React, { useState } from 'react'
import { Box ,Input ,Button,Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [name,setName]=useState("");
    const [difficulty,setDifficulity]=useState("");
    const navigate=useNavigate();

    const handlesubmit=()=>{
        let details={
            name:name,
            difficulty:difficulty
        }
        localStorage.setItem("details", JSON.stringify(details));
        if(name.length>0 && difficulty.length>0){
            navigate("/playzone");
        }
   
    }
  return (
    <Box>
<Box  display="flex" flexDirection="column" gap="30px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" w="460px" alignItems="center" padding="40px 0 40px 0" margin="auto" marginTop="100px" borderRadius="5px">
    <Box>
<Input placeholder='Enter Name' w="400px" onChange={(e)=>setName(e.target.value)} required/>
    </Box>
    <Box>
    <Select placeholder='Select Game Difficulty level' w="400px"  onChange={(e)=>setDifficulity(e.target.value)} required>
  <option value='high'>High Level</option>
  <option value='medium'>Medium Level</option>
  <option value='low'>Low Level</option>
</Select>
    </Box>
    <Box>
        <Button colorScheme="blue" w="400px" onClick={handlesubmit}>Submit</Button>
    </Box>
</Box>
    </Box>
  )
}

export default Home