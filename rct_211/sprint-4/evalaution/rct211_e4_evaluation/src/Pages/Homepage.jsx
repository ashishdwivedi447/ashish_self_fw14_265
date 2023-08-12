import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData } from "../Redux/action";
import {Link }from "react-router-dom"
import axios from "axios";

const Homepage = () => {

  const data=useSelector((store)=>store.countries)
  const dispatch=useDispatch()
  

  useEffect(()=>{
  dispatch(getData())
  },[])

  console.log(data);

  const handlesort=(e)=>{
  let sort=e.target.value;
    if(sort==="asc"){
      data.sort((a,b)=>(a.population)-(b.population))
    }
    else if(sort==="desc"){
      data.sort((a,b)=>b.population-a.population)
    }
    console.log(sort);
  }

  
  
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup >
          <Stack direction="row" onChange={handlesort}>
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {data.length>0 && data.map((item)=>(
              <tr>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.population}</td>
                <td><Link to={`/country/${item?.id}`}><button style={{backgroundColor:"blue",color:"white"}}>EDIT</button></Link></td>
                <td><button style={{backgroundColor:"red",color:"white"}}>DELETE</button></td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
