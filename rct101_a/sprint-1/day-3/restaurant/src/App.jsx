import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RestaurantDetails from './components/RestaurantDetails'
import Form from "./components/Form"

function App() {
  
  return (
    <div className="App">
     <RestaurantDetails />
     <Form />
    </div>
  )
}

export default App
