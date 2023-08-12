import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { addtodosfailure, addtodosrequest, addtodossuccess, gettodosfailure } from '../Redux/AppReducer/action';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import axios from "axios";


const AddTodo = ({getTodos}) => {

    const [todos,setTodos]=useState("");
    const dispatch=useDispatch();

    const handleAdd=()=>{
        const payload={
        id:uuidv4(),
        title:todos,
        status:false

        }

        addTodos(payload)
        .then(()=>getTodos())
    }

    const addTodos=(payload)=>{
  dispatch(addtodosrequest())
 return axios.post("http://localhost:8080/todos",payload)
  .then((res)=>dispatch(addtodossuccess(res.data)))
 
  .catch((error)=>dispatch(addtodosfailure()))
    }
  return (
    <div>
        <h3>Add todos </h3>
        <input type="text"  placeholder='Enter Todos...' value={todos} onChange={(e)=>setTodos(e.target.value)}/>
        <button onClick={handleAdd}>Addtodo</button>
    </div>
  )
}

export default AddTodo