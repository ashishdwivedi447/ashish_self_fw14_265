import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Hello} from "./components/hello"

import {useEffect} from "react"
import {Todos} from "./components/todo"

function App() {
 

 

  return (
    <div className="App">
     <Todos/>
     </div>
  )
}

export default App


// to run the server use command   ---->   json-server db.json --port 8080



