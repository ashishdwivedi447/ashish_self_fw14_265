import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Links } from './components/links'
import{Logo} from "./components/logo"
import {Button} from "./components/button"

function App() {
  

  return (
    <div className="App">
      <Logo/>
      <Links/>
      <Button/>
    </div>
  )
}

export default App
