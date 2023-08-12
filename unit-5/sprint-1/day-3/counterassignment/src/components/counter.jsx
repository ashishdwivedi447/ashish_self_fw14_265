import { useState } from "react"
import "./counter.css"

export const Counter=()=>{

const [counter,setCounter]=useState(0)

const valuechange=(value)=>{
    setCounter(counter+value);
}

const double=()=>{
    setCounter(counter*2);
}



return (
   <div>
       <h3  className={counter %2===0 ? "even" : "odd"}>Counter:{counter}</h3>
       <button onClick={()=>{
           valuechange(1)
       }}>Incre+</button>
       <button onClick={()=>{
           valuechange(-1)
       }}>dec-</button>
       <button onClick={double}>double</button>
   </div>
)
    
}