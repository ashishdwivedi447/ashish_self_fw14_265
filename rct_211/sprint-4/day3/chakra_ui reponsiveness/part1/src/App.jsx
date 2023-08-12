import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Partone from './Components/Partone'
import Parttwo from './Components/Parttwo'


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Partone/>}/>
        <Route path="parttwo" element={<Parttwo/>}/>
      </Routes>
    </div>
  )
}

export default App
