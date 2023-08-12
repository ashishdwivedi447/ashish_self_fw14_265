import React, { useState } from 'react'
import { useEffect } from 'react';

const downtimer = (time) => {

    const [watch,setWatch]=useState(time);
  
   
  useEffect(()=>{
    let  id=setInterval(()=>{
      if(watch<=1){
        clearInterval(id);
      }
      else{
        setWatch((prev)=>prev-1);
      }
    
  },1000)
  },[]);
     
  
 
   

   

  return {watch}
}

export default downtimer