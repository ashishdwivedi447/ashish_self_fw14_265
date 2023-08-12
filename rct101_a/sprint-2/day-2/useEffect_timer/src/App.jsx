import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 
const [timer,setTimer]=useState(20);

 useEffect(()=>{
      let id=setInterval(() => {
      
        if(timer<=0){
          clearInterval(id);
        }
        else{
          setTimer(timer-1);
        }
     }, 100);

     return ()=>{
      clearInterval(id);  // this is cleanup function it is used to call the API TO inform that user has logged out.
     }
 },[timer])
  return (
    <div className="App">
      <h3>Timer:{timer}</h3>
   
    </div>
  )
}

export default App
