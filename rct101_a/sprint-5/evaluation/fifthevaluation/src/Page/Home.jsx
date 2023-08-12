import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
const Home = () => {


    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([]);

    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:8080/products")
        .then((r)=>{
            setLoading(false)
            setData(r.data)
        })
    },[])

    if(loading){
        return <h3>Loading</h3>
    }
  return (
    <div className='home'>
        {data.map((e)=>(
      <div className='box'>
      <div><img src={e.imageurl} alt="" /></div>
      <div className='content'>{e.brand}</div>
      <div >{e.type}</div>
      <div className='content'>{e.price}</div>
      <div className='content'><Link to={`/cart/${e.id}`}><button>Add to Cart</button></Link></div>
      </div>
        ))}
        
        
    </div>
  )
}

export default Home