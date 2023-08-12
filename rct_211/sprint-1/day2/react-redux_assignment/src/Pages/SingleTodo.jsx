import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTodo } from "../redux/Todo/todo.action.Types";
import { useParams } from "react-router-dom";

function SingleTodo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const singleTodo = useSelector((state) => state.todos.singleTodo);
  // console.log(singleTodo);
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos)
 
  const [singleTodo]=useState(()=>{return todos.find((e)=>e.id == id) ||{}})
  console.log('currenttodo:', singleTodo)
  

  // useEffect(() => {
  //   getSingleTodo(dispatch, id);

  //   return () => {
  //     console.log("singleTodo unmounted");
  //   };
  // }, []);

  return (
    <div>
      <h2>Todo Details</h2>
      <div >
        <h4>taskID : </h4>
        <p>{singleTodo.id}</p>
      </div>
      <h4>Task detail :</h4> <span>{singleTodo.text}</span>
      <h4>Task status :</h4>{" "}
      <p style={{ color: singleTodo.state ? "green" : "red" }}>
        {singleTodo.state ? "Done" : "Not Done"}
      </p>
    </div>
  );
}

export default SingleTodo;
