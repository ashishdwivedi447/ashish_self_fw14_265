import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from "./components/Body"
import {ThemeContext} from "./Context/ThemeContext"
import {useContext} from "react";

function App() {
  const {theme}=useContext(ThemeContext);
console.log(theme)
  return (
    <div className={`App ${theme==="light" ?"light" :"dark"}`}>
     <Navbar/>
     <Body/>
    </div>
  )
}

export default App
