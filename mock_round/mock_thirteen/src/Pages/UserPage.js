import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/action'
import { Box ,Input ,Text, Select ,Image} from '@chakra-ui/react'


const UserPage = () => {

const data=useSelector((store)=>store.jobs);
const dispatch=useDispatch();
    useEffect(()=>{
dispatch(getData())
    },[])

    console.log(data);
  return (
    <Box >
        <Box display="flex" gap="20px" margin='30px 10px 0 10px'>
        <Box>
<Input placeholder='Search By company Name' w="350px"/>
        </Box>
        <Box display="flex" alignItems="center" gap="20px">
            <Text>Filter By location</Text>
            <Select placeholder='Select location' w="330px">
  <option value='United Kingdom'>United Kingdom</option>
  <option value='United States'>United States</option>
  <option value='Russia'>Russia</option>
  <option value="Japan">Japan</option>
</Select>
        </Box>

        <Box display="flex" alignItems="center" gap="20px">
            <Text>Filter By location</Text>
            <Select placeholder='Select location' w="330px">
  <option value='United Kingdom'>United Kingdom</option>
  <option value='United States'>United States</option>
  <option value='Russia'>Russia</option>
  <option value="Japan">Japan</option>
</Select>
        </Box>
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gridGap="20px" padding="50px 30px 30px 30px" >
           {data.map((item)=>(
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="300px" height="170px" padding="20px 0 0 20px">
                <Box>
                    <Image src="https://i0.wp.com/www.iedunote.com/img/23559/what-is-a-company-scaled.jpg" height="40px" borderRadius="10px"/>
                </Box>
                <Box display="flex" gap="20px">
                    <Box>{item.postedAt}</Box>
                    <Box>{item.contract}</Box>
                </Box>
                <Box>{item.company}</Box>
                <Box color='blue' padding="30px 0 0 0">{item.location}</Box>
            </Box>
           ))}
        </Box>
    </Box>
  )
}

export default UserPage