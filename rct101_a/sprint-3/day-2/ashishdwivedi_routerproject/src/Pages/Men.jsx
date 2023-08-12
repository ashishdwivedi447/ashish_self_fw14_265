import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import { CartContext } from '../Context/CartContext';
import {useContext} from "react"
const Men = () => {


    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
    const {addtocart}=useContext(CartContext)
   
          
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:8080/men")
        .then((r)=>{
            setLoading(false)
            setData(r.data)
        })
    },[])

    if(loading){
        return <h3>Loading</h3>
    }
  return (
    <>
    <div className='banner'><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-store-banner-design-template-e7332aaf6402c88cb4623bf8eb6f97e2_screen.jpg?ts=1620867237" alt="" /></div>
    <div className='home'>
      
        {data.map((e)=>(
      <div className='box' key={e.id} >
      <div><img src={e.imageurl} alt="" /></div>
      <div className='content'>{e.brand}</div>
      <div>{e.type}</div>
      <div className='content'>{e.price}</div>
      <div className='content'><button onClick={()=>addtocart(e)}>Add to Cart</button></div>
      </div>
        ))} 
        
        
    </div>
    </>
  )
}

export default Men