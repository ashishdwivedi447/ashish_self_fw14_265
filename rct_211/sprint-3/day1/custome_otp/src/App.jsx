import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Pin } from './components/Pin'

function App() {
  const [otp, setOtp] = useState("")

  return (
    <div className="App">
     <h1>Otp App</h1>
     <Pin length={4} setOtp={setOtp}/>
     <h3>The value of otp is : {otp}</h3>
    </div>
  )
}

export default App
