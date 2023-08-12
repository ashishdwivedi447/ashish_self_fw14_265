import React, { useEffect, useRef, useState } from 'react'


const useTimer = (time) => {
 const timerId=useRef(null);
 const [timer,setTimer]=useState(time)

 const start=()=>{
    if(!timerId.current){
        let id=setInterval(()=>{
            setTimer((prev)=>prev+1000)
             },100)
         
             timerId.current=id;
    }
   
}


 
 const stop=()=>{
    clearInterval(timerId.current);
    timerId.current=null;
 }

 const reset=()=>{
    clearInterval(timerId.current);
    setTimer(0);
    timerId.current=null;
 }
    return{ timer,start,stop,reset}
}

export default useTimer