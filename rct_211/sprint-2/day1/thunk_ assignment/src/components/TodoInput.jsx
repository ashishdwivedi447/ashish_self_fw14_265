import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addtodoRequest ,addtodoSucesss,addtodoFailure,getTodos} from '../Redux/action'

const TodoInput = () => {

    const [title,setTitle]=useState("")
    const dispatch=useDispatch()

    const handleAdd=()=>{
       const payload={
      title,
      status:false
       }
    setTitle("")
      dispatch(addtodoRequest())
    axios.post("http://localhost:8080/todos",payload)
    .then((r)=>dispatch(addtodoSucesss(r.data)))
    //.then(()=>getTodos())
    .catch((error)=>dispatch(addtodoFailure(error)))

    }
    
  return (
    <div>
        <input type="text" placeholder='Enter some Task' value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput