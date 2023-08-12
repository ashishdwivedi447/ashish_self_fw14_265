import React, { useState } from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0);
    const handleCounter = (val)=>{
        if(val==-5&&counter==0){

        }
        else{
            setCounter(counter+val);
        }
    }
  return (
    <div>
        <h1>Counter App</h1>
        <p>{counter}</p>
        <button onClick={()=>handleCounter(5)}>Add</button>
        <button onClick={()=>handleCounter(-5)}>Reduce</button>
    </div>
  )
}

export default Counter