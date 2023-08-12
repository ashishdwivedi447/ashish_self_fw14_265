import React ,{useEffect, useState}from 'react'
import Header from "./Header"
import TodosInput from './TodosInput'
import TodosItem from './TodosItem'
import axios from "axios"


 export interface ITodoItems {
    id:number,
    title:string,
    status:boolean,
}

const Todos = () => {
    const [todos,setTodos]=useState<ITodoItems[]>([])

    const handleAdd=(title:string)=>{
        const payload={
            title,  status:false,id:todos.length+1
        };
        axios.post("http://localhost:8080/todos",payload)
        .then(getTodos)
       // setTodos([...todos,payload])
    }

    const getTodos=()=>{
        axios.get("http://localhost:8080/todos")
        .then(({data}:{data:ITodoItems[]})=>{
          setTodos(data);
        })
    }

useEffect(()=>{
getTodos()
},[])
  return (
    <div>
        <Header label="Todos"/>
        <TodosInput onClick={handleAdd}/>
        {todos.length>0 && todos.map((item)=>(
            <TodosItem key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Todos