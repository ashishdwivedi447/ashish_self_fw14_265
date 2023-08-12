import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import "./Form.css"

const Form = () => {
    const [form ,setForm]=useState([]);

    const onChange=(e)=>{
        let {type,name,value,checked,files}=e.target;
        // console.log(type,name,value,checked,files);
       if(type==="checkbox"){
           setForm({
               ...form,
               [name]:checked,
           })
       }
      else if(type==="file"){
           setForm({
               ...form,
               [name]:files,
           })
       }
       else{
           setForm({
               ...form,
               [name]:value,
           })
       }
       
       }

       const handleOnSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/Table",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form
                
            )
        })
        .then((r)=>r.json())
        .then((data)=>{
           
        }



        )
       }
    
  return (
    <div>
     <form className='form-div'onSubmit={handleOnSubmit}>
     <div>
         <label htmlFor="">Name</label>
         <Input onChange={onChange} name="name" htmlSize={4} width='250px' size="xs" placeholder='Enter Name...' value={form.name}/>
     </div>
     <div>
         <label htmlFor="">Age</label>
         <Input  onChange={onChange} name="age" htmlSize={4} width='250px' size="xs"  placeholder='Enter Age' type="Number"  value={form.Age}/>
     </div>
     <div>
         <label htmlFor="">Address</label>
         <Input onChange={onChange} name="address" htmlSize={4} width='250px' size="xs" placeholder='Enter Address' value={form.address} />
     </div>
     <div>
         <label htmlFor="">Department</label>
         <select name="Department" onChange={onChange} value={form.Department}>
             <option value="Marketing">Marketing</option>
             <option value="Backoffice">Backoffice</option>
         </select>
     </div>
     <div>
         <label htmlFor="">Salary</label>
         <Input onChange={onChange}  name="Salary" htmlSize={4} width='250px' size="xs" placeholder='Enter Salary'  value={form.Salary}/>
     </div>
     <div>
         <label htmlFor="">Marital State</label>
         <input  onChange={onChange}  name="Maritalstatus" type="checkbox" value={form.Maritalstatus} />
     </div>
     {/* <div>
         <label htmlFor="">Profile Photo</label>
         <input onChange={onChange}  name="Profile" type="file"  accept="image/png,image/jpeg,application/pdf"mvalue={form.Profile}/>
     </div> */}
     <Button colorScheme='blue' type="submit" size="sm" style={{marginTop:"10px"}} 
     >Button</Button>
     </form>
       
    </div>
  )
  }

export default Form