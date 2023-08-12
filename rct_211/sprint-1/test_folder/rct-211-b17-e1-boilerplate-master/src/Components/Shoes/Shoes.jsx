import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios";
import ShoeCard from "./ShoeCard/ShoeCard";

const Shoes = () => {

  const shoes=useSelector((store)=>store.shoes)

  const dispatch=useDispatch();
  const getshoes=()=>{
    dispatch(getShoesFailure());
  axios.get("http://localhost:8080/shoes")
  .then((r)=>dispatch(getShoesSuccess(r.data)))
  .catch((error)=>dispatch(getShoesFailure()));
  }

  useEffect(()=>{
    getshoes()
  },[])

  console.log(shoes);
  return <div>{
    shoes.map((item)=>(
      <ShoeCard shoedata={item}/>
    ))
    
    }</div>;
};

export default Shoes;
