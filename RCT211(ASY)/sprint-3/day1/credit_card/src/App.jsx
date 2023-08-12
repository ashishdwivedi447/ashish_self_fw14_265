import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Otp } from './components/Otp';

function App() {
 const [otp,setOtp] = useState("");
  return (
    <div className="App">
    <h1>Credit Card</h1>
    <Otp setOtp={setOtp} len={4}/>
    <h3>Credit card otp:{otp}</h3>
    </div>
  )
}

export default App
