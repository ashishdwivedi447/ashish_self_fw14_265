import React from 'react'
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

const Joblisting = () => {

    let postdata=JSON.parse(localStorage.getItem("postData"));
    console.log(postdata);
  return (
    <div>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
  
    <Thead>
      <Tr>
        <Th>Company</Th>
        <Th>Position</Th>
        <Th >Contract</Th>
        <Th>Loaction</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            postdata.map((item)=>(
                <Tr>
             <Td>{item.company}</Td>
             <Td>{item.position}</Td>
             <Td >{item.contract}</Td>
             <Td>{item.location}</Td>
           </Tr>
            ))
             
        }
      
     
    </Tbody>
   
  </Table>
</TableContainer>
    </div>
  )
}

export default Joblisting