import { useState } from "react";

export const useCounter = (init) => {

const [count,setCount]=useState(init.initialValue)

const incCount=(value)=>{
    if(count<init.maxValue){
        if(value){
            setCount(count+value)
        }
        else{
            setCount(count+1)
        }
    }
   
   
}

const decCount=(value)=>{
    if(count>init.minValue)
    setCount(count-value)
}
   return {count,incCount,decCount}
};
