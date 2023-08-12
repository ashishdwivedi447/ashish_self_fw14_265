import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import {useNavigate,} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { gettodosfailure, gettodosrequest, gettodossuccess, updatetodofailure, updatetodorequest, updatetodosuccess } from '../Redux/AppReducer/action';


const Edit = () => {
    const {id}=useParams()
    const Navigate=useNavigate();
   // console.log(id);
    const [formdata,setFormdata]=useState({})
    const dispatch=useDispatch()
    const todos = useSelector((store) => store.AppReducer.todos);
    const task=todos?.find((item)=>item.id==id)


    const [title,setTitle]=useState(task.title)
    // const handleChange=(e)=>{
    // const {name,value}=e.target
    //console.log(name,value);

    // setFormdata({...formdata,[name]:value})
    // }

    
    const[status,setStatus]=useState();

    const getTodos = () => {
      dispatch(gettodosrequest());
      axios
        .get("http://localhost:8080/todos")
        .then((res) => dispatch(gettodossuccess(res.data)))
        .catch((error) => dispatch(gettodosfailure()));
    };

    const update=(payload)=>{
        
        dispatch(updatetodorequest())
      axios.patch(`http://localhost:8080/todos/${id}`,payload)
      .then((r)=>{
        // console.log(id)
        dispatch(updatetodosuccess(r.data))})
      .then((error)=>dispatch(updatetodofailure()))
      .then(getTodos())
        Navigate("/");
    }



    const handleSubmit = (e) =>{
      e.preventDefault();
      let data = {
        title: title,
        status: status
      }
      update(data)
    }


   
      
        
     // console.log(title);

       
          // setStatus(status)
      

   // console.log(formdata);
 
  // console.log(todos);
  return (
    <div>
        <h3>Edit Todos</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <select name="status" onChange={(e) => setStatus(e.target.value)} >
                <option value="false">false</option>
                <option value="true">true</option>
            </select>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Edit