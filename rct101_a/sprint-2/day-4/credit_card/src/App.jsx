import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from "./components/Form";
import Credit from './components/Credit'

function App() {
  

  return (
    <div className="App">
     <div style={{display:"flex",justifyContent:"center",gap:"60px",marginTop:"60px"}}>
      <div><Credit/></div>
      <div><Form/></div>
     </div>
    </div>
  )
}

export default App
