import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios";

const Shoes = () => {

const {shoes} =useSelector((store)=>store)
  const dispatch=useDispatch();
   const getShoes=()=>{
  const requestaction= getShoesRequest()
   }
  useEffect(()=>{
   getShoes
  },[])

  return <div>{/* Map through the shoes list here */}</div>;
};

export default Shoes;
