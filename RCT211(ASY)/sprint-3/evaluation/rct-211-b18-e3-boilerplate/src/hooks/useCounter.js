import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = (init) => {
  const [countValue,setCountValue]=useState(init.initialValue);
  const incCount = (value) => {
    if(countValue<init.maxValue){
      if(value){
        setCountValue(countValue+value);
      }
      else{
        setCountValue(countValue+1);
      }
    }
 

  };
  const decCount = (value) => {
    if(countValue>init.minValue){
      if(value){
        setCountValue(countValue-value)
      }
      else{
        setCountValue(countValue-1);
      }
    }
    
   
  };
  return {
    countValue,
    incCount,
    decCount,
  };
};
