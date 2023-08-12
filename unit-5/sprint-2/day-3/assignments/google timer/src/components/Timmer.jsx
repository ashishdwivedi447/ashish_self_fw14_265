import './Timmer.css';
import { useRef, useState,useEffect } from 'react';

function Timmer() {
    const [starttime,setstarttime] = useState("00:00");
    const starttimeRef = useRef(null);    
    console.log(starttime)
 
useEffect(()=>{
    let id =  setInterval(()=>{           
        setstarttime((prevValue)=>{
              if(prevValue<=0){
                  clearInterval(id) ;
                  return 0;                
              }
              return prevValue-1;
          });
      },1000)
      return function stop(){
          clearInterval(id)
      };
  },[])

// const handelstarttime = () =>{
//     starttimeRef.current = setInterval(()=>{
//         setstarttime((starttime) => starttime-1);
//     },1000)
// }

// const formatTime = () => {      
//     const    getHours = parseInt(starttime * 10 / 1000 / 60 / 60);// calculate hours
//     const    getMinutes = parseInt(starttime * 10 / 1000 / 60);  // calculate minutes
//     const    getSeconds = parseInt((starttime * 10 / 1000)%60);// calculate seconds
//     return `${getHours} : ${getMinutes} : ${getSeconds}`         
//   }
  return (
    <div className="App">  
    <h1>TIMMER</h1>
    <input onChange={(e) =>{
        setstarttime(e.target.value)
    }} type="time" class="without_ampm"  />
    <button onClick={() =>{
     let id =  setInterval(()=>{           
        setstarttime((prevValue)=>{
              if(prevValue<=0){
                  clearInterval(id) ;
                  return 0;                
              }
              return prevValue-1;
          });
      },1000)
      return function stop(){
          clearInterval(id)
      };
    }}
     >Start</button>
     <p>{starttime}</p>
    </div> 
  );
}

export default Timmer;
