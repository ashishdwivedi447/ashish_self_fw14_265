import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTodo, updateTodo } from "../redux/Todo/todo.action.Types";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log('id:', id)
  const singleTodo = useSelector((state) => state.todos.singleTodo);
  console.log(singleTodo);

  const [formdata, setFormdata] = useState({
    id: "",
    text: "",
    state: false,
  });
  // console.log(typeof(formdata.state))

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formdata);

    updateTodo(dispatch, formdata);
    alert("todo updated");
    navigate("/");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    // if(id){

    //    getSingleTodo(dispatch, id);
    // setFormdata(singleTodo)
    // }
   
    axios
      .get(`http://localhost:8080/Todos/${id}`)
      .then((res) => setFormdata(res.data));

    return () => {
      console.log("Edit unmounted");
    };
  }, [id,dispatch]);

  return (
    <div>
      <h2>Edit Todo Details</h2>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            value={formdata?.text}
            type="text"
            name="text"
            onChange={handleChange}
          />
          <select
            name="state"
            id=""
            value={formdata?.state}
            onChange={handleChange}
          >
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
