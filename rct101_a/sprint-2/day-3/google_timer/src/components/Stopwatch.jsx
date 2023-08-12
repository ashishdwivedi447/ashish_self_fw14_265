import React, { useState } from 'react';
import { useRef } from 'react';


function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const Stopwatch = () => {
    const timerId=useRef(null);
    const [watch,setWatch]=useState(1000);
     // timer Id is used when nothing to do with dom updation.  it shows like this ----> timerid{ current:null}

    const start=()=>{
     if(!timerId.current){
         let id=setInterval(()=>{
             setWatch((prev)=> prev+1000)
         },100)
         timerId.current=id;
     }

     
    };
    const Pause=()=>{
        clearInterval(timerId.current);
        timerId.current=null;
    }
    const Reset=()=>{
        clearInterval(timerId.current);
        setWatch(0);
        timerId.current=null;
        
    }


    
  return (
    <div>
        <h3>Stopwatch</h3>
        <h2>{msToTime(watch)}</h2>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={Pause}>Pause</button>
            <button onClick={Reset}>Reset</button>
        </div>
        
     

    </div>
  )
}

export default Stopwatch