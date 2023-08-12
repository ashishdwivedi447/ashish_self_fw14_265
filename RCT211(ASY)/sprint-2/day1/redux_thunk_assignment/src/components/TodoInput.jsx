import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getTodos } from '../Redux/action';
import axios from "axios"
import { useDispatch } from 'react-redux/es/exports';
import * as types from "../Redux/actionTypes"

const TodoInput = () => {
    const dispatch=useDispatch();

    const [todos,setTodos]=useState("")

    const handleAdd=(e)=>{
   
        const payload={
            id:uuidv4(),
            title:todos,
            status:false,
        
    
    }
        
           
        dispatch({type:types.ADD_TODO_REQUEST})
        axios.post("http://localhost:8080/todos",payload)
        .then((res)=>dispatch({type:types.ADD_TODO_SUCCESS,payload:res.data}))
        .then(()=>dispatch(getTodos()));
        setTodos("")
    }
  return (
    <div>
        <input type="text" placeholder='Enter todos' onChange={(e)=>setTodos(e.target.value)} value={todos}/>
        <button onClick={handleAdd}>AddTodo</button>
    </div>
  )
}

export default TodoInput