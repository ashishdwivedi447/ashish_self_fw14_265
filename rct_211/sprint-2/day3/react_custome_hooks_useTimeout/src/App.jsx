import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useTimeout} from './Hooks/useTimeout'

function App() {
  
const ready=useTimeout(5000)
  return (
    <div className="App">
      <h3>TimeOut</h3>
      {ready ? "READY" :"NOT READY"}
    </div>
  )
}

export default App
