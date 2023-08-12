import React, { useEffect, useState } from 'react'

const useTimeout = (delay) => {
    const [ready,setReady]=useState(false)

    useEffect(()=>{
   let id=setTimeout(()=>{
    setReady(true)
   },delay)
    },[])
  return  ready
}

export default useTimeout