import React from "react";
import { useRef } from "react";

const TodoInput = ({HANDLEADD}) => {
 const inputRef=useRef();
 
const add=()=>{
  HANDLEADD(inputRef.current.value);
  inputRef.current.value="";
}

  return <div>

    <h1>Todo</h1>
    <input ref={inputRef} type="text" />
    <button onClick={add}>add</button>
  </div>;
};

export default TodoInput;
