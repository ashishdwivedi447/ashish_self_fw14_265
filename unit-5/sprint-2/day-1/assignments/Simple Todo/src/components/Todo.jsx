import { useState } from "react";
import {Todoinput} from "./Todoinput"
import {Todoitems} from "./todoitems"
import {nanoid} from "nanoid"

function Todo(){

    const [todosList,setTodosList]=useState([])

    const getdata=(todo)=>{

        const payload={
            title:todo,
            status:false,
            id:nanoid(5)
        };
        setTodosList([...todosList,payload]);
    }

    const handleStatus =(id)=>{

        console.log("id",id);
        // find this id from todoList
        //toggle it's status
        // get new array , set it again

        setTodosList(todosList.map((e)=>(e.id===id ? {...e , status: !e.status} :e)));
    }
    return (<div>
        <Todoinput getdata={getdata}/>

        

        {todosList.map((e)=>(

           <Todoitems handleStatus={handleStatus} todo={e}></Todoitems>
        ))}
    </div>
    );
}
    

export {Todo};