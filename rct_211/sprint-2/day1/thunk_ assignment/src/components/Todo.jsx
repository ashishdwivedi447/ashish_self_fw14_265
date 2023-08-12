import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import {getTodos} from '../Redux/action'

import { useDispatch,useSelector } from 'react-redux/es/exports'
import { store } from '../Redux/store'
import TodoInput from './TodoInput'

const Todo = () => {

const dispatch=useDispatch()

const todos=useSelector((store)=>store.todos)

   

    useEffect(()=>{
    dispatch(getTodos)
    },[])

    //console.log(todos);
  return (
    <div>
        <h3>Todos</h3>
        <TodoInput/>
        {todos?.map((item)=>(
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}

export default Todo