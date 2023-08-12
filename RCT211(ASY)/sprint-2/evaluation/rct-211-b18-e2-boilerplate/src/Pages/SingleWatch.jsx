import React, { useState ,useEffect} from "react";
import {useParams} from "react-router-dom"
import { useDispatch ,useSelector} from 'react-redux'
import { getWatch } from "../Redux/AppReducer/action";

const SingleWatch = () => {

  const {id}=useParams()

  const watches=useSelector((store)=>store.AppReducer.watches)

  const [currentwatch,setCurrentwatch]=useState({})
  const dispatch=useDispatch();

  useEffect(()=>{
    if(watches?.length===0){
      dispatch((getWatch()))
    }
    },[watches?.length,dispatch])

    useEffect(()=>{
      if(id){
       let currentwatch=watches?.find((watch)=>watch.id===(id))
     
        currentwatch && setCurrentwatch(currentwatch);
      }
     },[watches,id])
     console.log(currentwatch);
     
  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src="watch-image" alt="Cover Pic" />
      </div>
      <div>
        <div>Watch Category</div>
      </div>
    </div>
  );
};

export default SingleWatch;
