import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import {Link} from "react-router-dom";

const Products = () => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/data")
    .then((r)=>r.json())
    .then((data)=>setData(data))
  },[])
  return (
    <div>AllProducts
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Product Name</Th>
        <Th>Price</Th>
        <Th>More Details</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((e)=>(
  
      <Tr>
        <Td>{e.name}</Td>
  <Td>{e.price}</Td>
  <Td key={e.id}><Link to={`/products/${e.id}`}>more</Link></Td>
     
      </Tr>
       ))}
    
     
    </Tbody>
   
  </Table>
</TableContainer>
    </div>
  )
}

export default Products