import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  
  const op=["Android", "Blackberry","iphone" ,"windows phone"];

  const manu=["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     <ul>
     {op.map(e=>{
     return <li>{e}</li>
   })}
     </ul>

     <h1>Mobile Manufacturers</h1>

     <ul>

       {manu.map(e=>{
         
        return <li className={`${e==="Samsung" || e==="HTC" ? "squarelist" : "circlelist"}`}>{e}</li>
       })}
     </ul>
   
    </div>
  )
}

export default App
