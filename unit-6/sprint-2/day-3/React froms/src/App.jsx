import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import Form from "./components/Form";
import Table from "./components/Table"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Form/>
     <Table/>
    </div>
  )
}

export default App
