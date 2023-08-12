import React, { useEffect, useState } from "react";
import {
  deletetodosfailure,
  deletetodosrequest,
  deletetodossuccess,
  gettodosfailure,
  gettodosrequest,
  gettodossuccess,
} from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import AddTodo from "../components/AddTodo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { store } from "../Redux/store";
import { DELETE_TODOS_SUCCESS } from "../Redux/AppReducer/actionTypes";

const Homepage = () => {
  const todos = useSelector((store) => store.AppReducer.todos);
  const dispatch = useDispatch();

  const [complete, setComplete] = useState(false);
  const getTodos = () => {
    dispatch(gettodosrequest());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => dispatch(gettodossuccess(res.data)))
      .catch((error) => dispatch(gettodosfailure()));
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  const handledelete = (id) => {
    dispatch(deletetodosrequest());
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((r) => dispatch(deletetodossuccess(r.data)))
      .then( getTodos())
      .catch((error) => dispatch(deletetodosfailure()));
  };

  console.log(store.getState());
  const Navigate = useNavigate();

  return (
    <div>
      <AddTodo getTodos={getTodos} />
      {todos?.map((item) => (
        <div>
          <Link to={`todos/${item.id}`}>
            <div key={item.id}>{item.title}</div>{" "}
          </Link>
          <div>
            <button onClick={() => Navigate(`/todos/${item.id}/edit`)}>
              Edit
            </button>
            <button onClick={() => setComplete(!complete)}>
              {complete ? "completed" : "Not-Completed"}
            </button>
            <button onClick={() => handledelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
