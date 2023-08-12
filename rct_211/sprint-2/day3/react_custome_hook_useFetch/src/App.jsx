import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useFetch from "./Hooks/useFetch"

function App() {
  
const {data,loading,error}=useFetch("https://api.github.com/search/users?q=masai")

  return (
    <div className="App">
     <h3>{loading && "Loading"}</h3>
     {data.length>0 && data.map((items)=>(
      <>
      <div>{items.login}</div>
      <div><img src={items.avatar_url} alt=""  style={{height:"150px"}}/></div>
      </>
      
     ))}
    </div>
  )
}

export default App
