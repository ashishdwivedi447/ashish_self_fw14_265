import React, { useState } from 'react'
import {store} from "../Redux/store"

const CounterValue = () => {

    const {counter}=store.getState()

    const [local,setLocal]=useState(0);


    store.subscribe(()=>{
      setLocal((prev)=>prev+1);
    })

    store.subscribe(()=>{
      setLocal((prev)=>prev-1);
    })
  return (
    <div>Counter: {counter}</div>
  )
}

export default CounterValue