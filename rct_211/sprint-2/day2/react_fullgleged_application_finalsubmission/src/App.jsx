import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainRoutes from './Pages/MainRoutes'
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App