import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import About from './Pages/About'
import Home from "./Pages/Home"
import Men from "./Pages/Men"

import Cart from "./Pages/Cart"
import Navbar from './components/Navbar'


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/men" element={<Men/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      
      </Routes>
     
    </div>
  )
}

export default App
