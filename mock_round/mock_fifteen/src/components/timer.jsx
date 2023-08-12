import React, { useState ,useEffect} from 'react'


const Timer = (time) => {

    const [timer,setTimer]=useState(time)
  
   
      useEffect(()=>{
        let id= setInterval(()=>{
            if(timer<=0){
                clearInterval(id);
            }
            else{
                setTimer((prev)=>prev-1);
            }
            
        },1000)
     
        return ()=>{
            clearInterval(id) 
        }
    
      },[timer])
            
        
       
  
  return timer;
}

export default Timer