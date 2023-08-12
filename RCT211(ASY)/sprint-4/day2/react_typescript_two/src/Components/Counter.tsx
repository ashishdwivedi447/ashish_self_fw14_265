import React, { useState } from 'react'
import Header from "./Header"
import Button from "./Button"

const Counter = () => {
    const [count,setCount]=useState(0);

    const handleClick=(value:number)=>{
       
            setCount(count+value)
        
   
    }
  return (
    <div>
        <Header label="Counter"/>
        <Header label={`${count}`}/>
        <Header>
            <div>children counter</div>
        </Header>

        <Button label="Add" handleClick={()=>handleClick(1)}/>
        <Button label="reduce" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter