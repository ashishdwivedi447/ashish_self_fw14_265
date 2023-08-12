import React ,{useEffect,useState}from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import {getShoes} from "../Redux/AppReducer/action"
const SingleShoe = () => {

  const {id}=useParams()
  const shoes=useSelector((store)=>store.AppReducer.shoes)
  const [currentshoes,setCurrentshoes]=useState()
  const dispatch=useDispatch()

  useEffect(()=>{
    if(shoes.length===0){
      dispatch(getShoes())
    }
    },[shoes.length,dispatch])
  
    useEffect(()=>{
     if(id){
      let temp=shoes.find((shoe)=>shoe.id===Number(id))
    
       temp && setCurrentshoes(temp);
     }
    },[shoes,id])
   console.log(currentshoes);
  return (
    <div>
      <h2>{currentshoes?.name}</h2>
      <div>
        <img src={currentshoes?.image} alt="Cover Pic" style={{height:"250px",width:"350px"}} />
      </div>
      <div>
        <div>{currentshoes?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
