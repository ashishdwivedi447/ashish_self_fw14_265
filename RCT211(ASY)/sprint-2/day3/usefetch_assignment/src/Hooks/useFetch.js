import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([]);

    const [Loading,setLoading]=useState(false);

    const [Error,setError]=useState(false);

    
    
    useEffect(()=>{
      setLoading(true);
      axios.get(url)
      .then((r)=>{
        setLoading(false);
        setData(r.data.items);
      })
      .catch((error)=>{
        setLoading(false)
        setError(false)
      })
    },[])
  return {Loading,data,Error}
}

export default useFetch