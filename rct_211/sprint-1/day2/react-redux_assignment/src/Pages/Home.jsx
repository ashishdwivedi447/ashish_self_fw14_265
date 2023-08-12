import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  errorTodo,
  Getdata,
  loadingTodo,
  successTodo,
  updateTodo,
} from "../redux/Todo/todo.action.Types";
import {store} from "../redux/store"

import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);
 // console.log(typeof(todos[0].state),"rerender");
  


  const toggleState=(e)=>{
    let payload={...e,state:!e.state}
    console.log(payload)
    updateTodo(dispatch,payload)

  }
  const Delete=(id)=>{
   deleteTodo(dispatch,id)
  }

  useEffect(() => {
    Getdata(dispatch);
  }, []);

  return (
    <div>
      <h1>Welcome Home</h1>
      {todos.map((e) => {
        return (
          <div key={e.id}>
            <Link to={`/todos/${e.id}`} style={{textDecoration: "none"}}>
              <p >{e.text}</p>{" "}
            </Link>
            <Link to={`/${e.id}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>
            <button onClick={()=>toggleState(e)} style={{color:  e.state ? "green" : "red"}}>{ e.state ? "mark Undone" : "Markdone"}</button>
            <button onClick={()=>Delete(e.id)}>Delete</button>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
