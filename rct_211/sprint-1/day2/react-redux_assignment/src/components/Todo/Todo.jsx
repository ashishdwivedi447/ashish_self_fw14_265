import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/Todo/todo.action.Types";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const HANDLEADD = (input) => {
    input = input.trim();
    let isPresent = todos.some((task) => task.text === input);
    if (input && !isPresent) {
      let todo = {
        id: uuid(),
        text: input,
        state: false,
      };
      console.log(todo);

      addTodo(dispatch, todo);
    } else {
      alert("dont't create a empty todo or a dublicate todo ");
    }
  };

  return (
    <div>
      <TodoInput HANDLEADD={HANDLEADD}></TodoInput>
    </div>
  );
};

export default Todo;
