import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom"

const Cart = () => {
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([]);
    const {id}=useParams();
    
    

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:8080/products/${id}`)
        .then((r)=>{
            setLoading(false)
            setData(r.data);
        })
    },[])

    
      
        
    

    if(loading){
        return <h3>Loading</h3>
    }
  return (
    <div>
<div><img src={data.imageurl} alt="" /></div>
    </div>
  )
}

export default Cart