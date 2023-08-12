import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector'

const SingleTodo = () => {

    const {id}=useParams()
    const todos=useSelector((store)=>store.todos)

    const [currenttodo]=useState(()=>{
        return todos.find((item)=>item.id===id||Number(id)) ||{}
    })
    
    
  return (
    <div>{currenttodo.title}</div>
  )
}

export default SingleTodo