import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Hello} from "./components/hello"

import {useEffect} from "react"
import {Todos} from "./components/todo"
import {Counter} from "./components/counter"


function App() {
  const [show,setShow]=useState(true);
  return (
    <div className="App">
     {/* {show ? <Todos/> :null} */}

     {show ?  <Counter/> :null}

    

     <button onClick={()=>{
       setShow(!show)
     }}>{show ? "Hide" :"show"} Todos</button>

    
     </div>
  )
}

export default App


// to run the server use command   ---->   json-server db.json --port 8080



