import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue]=useState("");
  const [todos,setTodos]=useState([]);
  const addtodo=(newtodo)=>{
    setTodos([...todos],{
      id:Date.now(),
      value:newtodo
    })
  }
  return (
    <div className={styles.todoForm}>
      <input value={value} data-cy="add-task-input" type="text" placeholder="Add Task..."  onChange={(e)=>{
        setTodos(e.target.value);
      }}/>
      <button data-cy="add-task-button" onClick={()=>{
        if(value!==0){
          addtodo(value)
          setValue("")
        }
      }
      
      } >+</button>
    </div>
  );
};

export default AddTask;
