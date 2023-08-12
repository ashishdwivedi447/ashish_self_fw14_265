import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message ,setMessage]=useState("");
  const getData=(data)=>{
console.log("get data from child",data);
setMessage(data);
  }

  return (
    <div className="App">
     <First dataFn={getData}/>
     <Second message={message} />
    </div>
  )
}

  function First({dataFn}){
    const data="hello c1";
    dataFn(data)
    return (
      <div>
        First child
      </div>
    )
  }
  function Second({message}){

  console.log("data received from sibling" ,message);
    return (
      <div>
        Second child,{message}
      </div>
    )
  }
export default App
