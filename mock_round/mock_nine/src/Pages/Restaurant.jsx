import React, { useEffect } from 'react'
import { Box ,Text} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {getData} from "../Redux/Appreducer/action";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Select ,Image} from '@chakra-ui/react'
import { useState } from 'react';

const Restaurant = () => {

    let token=localStorage.getItem("loginsuccesstoken");
    const data=useSelector((store)=>store.Appreducer.restaurant)
    const dispatch=useDispatch()
const [page,setPage]=useState(1);
const [sort ,setSort]=useState("")
const [filter,setFilter]=useState("")

const handlesort=(e)=>{
   let value=e.target.value;
   setSort(value);
}

const handlefilter=(e)=>{
let value=e.target.value;
setFilter(value);
}
console.log(page);
        useEffect(()=>{
            dispatch(getData(page,sort,filter))
                },[page,sort,filter])

    console.log(data);
  
  return (
    <Box>
<Box display="flex" gap='800px' padding="20px 0 0 80px" fontSize="30px">
    <Text>Token:{token}</Text>
<Link to="/cart">Cart</Link>
</Box>
{/* sor filter container ---->*/}

<Box display="flex" justifyContent="center" gap="30px">
    <Box display="flex" gap="40px" justifyContent="center">
    <Text>Sort By Rating</Text>
    <Select w="200px" onChange={handlesort}>
        <option value="desc">high to low</option>
        <option value="asc">low to high</option>
    </Select>
    </Box>

    <Box display="flex" gap="40px" justifyContent="center">
    <Text>Sort By Price</Text>
    <Select w="200px">
        <option value="desc">high to low</option>
        <option value="asc">low to high</option>
    </Select>
    </Box>

    <Box display="flex" gap="40px" justifyContent="center">
    <Text>Filter By type</Text>
    <Select w="200px" onChange={handlefilter}>
        <option value="fine_dining">fine_dining</option>
        <option value="ethnic">ethnic</option>
        <option value="fast_food">fast_food</option>
        <option value="cafe">cafe</option>
        <option value="casual_dining">casual_dining</option>
        
    </Select>
    </Box>
   
</Box>

{/* restaurent grid_container.. ---*/}

<Box display="grid" gridTemplateColumns="repeat(4,1fr)" gridGap="20px" padding="80px 50px 0 80px">
    {data.map((item)=>(
        <Box border="1px solid silver" w="200px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
           <Image src={item.image}/>
          <Box  >
            <Text>Name:{item.name}</Text>
            <Text>Type:{item.type}</Text>
            <Text>Rating:{item.rating}</Text>
            <Text>No of Vote:{item.number_of_votes}</Text>
            <Text>Price:{item.price_starts_from}</Text>
            </Box>
        
           <Button colorScheme="teal" size="sm" margin="0 0 0 30px">Add to Card</Button>
        </Box>
    ))
}
</Box>

{/* restaurent grid_container.. ---*/}
<Box display="flex" gap="10px" justifyContent="center" margin="30px 0 0 0" >
<Button colorScheme="green" onClick={()=>setPage(1)} >1</Button>
<Button colorScheme="green" onClick={()=>setPage(2)} >2</Button>
<Button colorScheme="green" onClick={()=>setPage(3)} >3</Button>
<Button colorScheme="green"onClick={()=>setPage(4)}  >4</Button>
<Button colorScheme="green"onClick={()=>setPage(5)} >5</Button>
</Box>

    </Box>
  )
}

export default Restaurant