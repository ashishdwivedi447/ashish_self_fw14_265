import React, { useEffect, useState } from 'react';
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
  } from '@chakra-ui/react';
  import { Button, ButtonGroup } from '@chakra-ui/react';
  import  axios  from 'axios';

const TableItem = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/Table")
    .then((r)=>r.json())
    .then((data)=>setData(data));
  },[])

  const Delete=(id)=>{

    axios.delete(`http://localhost:8080/Table/${id}`)
    .then((r)=>
    setData(data.filter((item)=>item.id!==id
      
    )));
    
  }
  return (
    <div>
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Address</Th>
        <Th>Department</Th>
        <Th>Salary</Th>
        <Th>Marital State</Th>
        <Th>Remove</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      {data.map((item)=>(
        <Tr>
        <Td>{item.name}</Td>
        <Td>{item.age}</Td>
        <Td >{item.address}</Td>
        <Td>{item.Department}</Td>
        <Td>{item.Salary}</Td>
        <Td >{item.Maritalstatus ? "Married" :"Unmarried"}</Td>
        <Button  colorScheme='blue' type="submit" size="sm" onClick={()=>Delete(item.id)}>Delete</Button>
        
        
      </Tr>
        
   
      ))}
      
     
      
    </Tbody>
    
  </Table>
</TableContainer>
    </div>
  )
}

export default TableItem