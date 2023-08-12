import React from 'react'
import { useState ,useEffect } from 'react';

//custome hooks assignment

const useFetch = (url) => {
    const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);

const fetchData=()=>{
  fetch(url)
  .then((r)=>r.json())
  .then((d)=>{
    setData(d.items)
    setLoading(false)
  })
  .catch((error)=>{
    setError(true);
    setLoading(false);
  }

  )
}

useEffect(()=>{
  fetchData()
},[])
  return {loading,data,error}
}

export default useFetch