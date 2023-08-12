import React, { useEffect, useState } from 'react'
import { Box ,Input,Button,Select} from '@chakra-ui/react'
import { getdata } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [num,setNum]=useState();
    const [category,setCategory]=useState("");
    const [difficulty,setDifficulty]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(getdata(num,category,difficulty))
    },[num,category,difficulty])

    const handleclick=()=>{
      navigate("/quiz")
    }
  return (
    <Box display="flex" flexDirection="column" gap="20px" alignItems="center" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="500px" marin="auto" margin="60px 0 0 33%" padding="10px 0 30px 0" borderRadius="10px">
<Box fontSize="25px" color="green">
    Set up Your Quiz
</Box>
<Box>
<Input placeholder='Enter Your Name' w="400px"/>
</Box>
<Box>
<Select placeholder='Select Category' w="400px" onChange={(e)=>setCategory(e.target.value)}>
  <option value='9'>General Knowledge</option>
  <option value='21'>Sports</option>
  <option value='22'>Geography</option>
</Select>
</Box>
<Box>
<Select placeholder='Select Difficulty'  w="400px"  onChange={(e)=>setDifficulty(e.target.value)}>
  <option value='easy'>Easy</option>
  <option value='medium'>Medium</option>
  <option value='hard'>Hard</option>
</Select>
</Box>
<Box>
<Input placeholder='Choose number of Questons' w="400px"  onChange={(e)=>setNum(e.target.value)}/>
</Box>
<Box>
 <Button colorScheme="pink" size="md" w="400px"onClick={handleclick}>START QUIZ</Button>
</Box>
    </Box>
  )
}

export default Home