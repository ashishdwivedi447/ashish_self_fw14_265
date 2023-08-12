import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Products from './Pages/Products'
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Product from "./Pages/Product"

function App() {
  

  return (
    <div className="App">
       <Navbar/>
      <Routes>
     
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<Product/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
