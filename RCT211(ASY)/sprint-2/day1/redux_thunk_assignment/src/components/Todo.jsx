import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/action'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todo = () => {

    const todos=useSelector((store)=>store.todos);
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getTodos())
    },[])

   // console.log(todos);
  return (
    <div>
        <h2>Todos</h2>
        <TodoInput/>
        {todos.map((item)=>(
           <TodoItem  data={item}/>
        ))}
   
    </div>
  )
}

export default Todo