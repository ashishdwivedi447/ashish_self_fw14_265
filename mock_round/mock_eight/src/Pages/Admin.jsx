import React, { useState } from 'react'
import { Input, Select ,Radio, RadioGroup,Stack,Button} from '@chakra-ui/react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postData } from '../Redux/action';

const Admin = () => {


    const [category,setCategory]=useState("");
    const [image,setImage]=useState("");
    const [room,setRoom]=useState("");
    const [bedtype,setBedtype]=useState("");
    const [person,setPerson]=useState("");
    const [capacity,setCapacity]=useState("");
    const [cost,setCost]=useState("");
    const [booked,setBooked]=useState("");
    const dispatch=useDispatch();
   

    const handleData=()=>{
        const formdata={
  category:category,
  image_url:image,
  type_of_room:bedtype,
  no_of_person:person,
  capacity:capacity,
  cost:cost,
  booked:booked,
        }
dispatch(postData(formdata));
        
    }
  return (
    <>
    <div style={{display:"flex" ,flexDirection:"column" ,gap:"25px" ,alignItems:"center"}}>
       <div style={{display:"flex"  ,gap:"25px"}}>
        <div>
        <label htmlFor="">Category</label>
        </div>
        <div>
        <Select placeholder='Select category' w="150px" name="category" onChange={(e)=>setCategory(e.target.value)}>
  <option value='family'>family</option>
  <option value='delux'>delux</option>
  <option value='suit'>suit</option>
</Select>
        </div>
        
        
       </div>
       <div>
        <Input placeholder='enter image url' w="400px" name="image_url" onChange={(e)=>setImage(e.target.value)}/>
       </div>
       <div >
       
       <RadioGroup  onChange={(e)=>setRoom(e)} >
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='red'  name="type of room" value="ac">
      Ac
    </Radio>
    <Radio colorScheme='green'  name="type of room" value="non ac" >
      Non AC
    </Radio>
  </Stack>
</RadioGroup>
       </div>
       <div>
       <Select placeholder='Select Bed type' w="150px" onChange={(e)=>setBedtype(e.target.value)} name="bed type">
  <option value='single'>Single</option>
  <option value='double'>double</option>
 
</Select>
       </div>
       <div>
        <Input placeholder='Enter no of adult' type="number"  w="400px" onChange={(e)=>setPerson(e.target.value)} name="no of person"/>
       </div>

       <div>
        <Input placeholder='Enter Max capacity' type="number"  w="400px" onChange={(e)=>setCapacity(e.target.value)} name="capacity"/>
       </div>
       <div>
        <Input placeholder='Enter cost' type="number"  w="400px" onChange={(e)=>setCost(e.target.value)} name="cost"/>
       </div>
       <div>
        <Input placeholder='Enter status' type="boolean"  w="400px" onChange={(e)=>setBooked(e.target.value)} name="booked"/>
       </div>
       <div>
        <Button w="100px" colorScheme="green" onClick={handleData}>Submit</Button>
       </div>
    </div>
    </>
  )
}

export default Admin