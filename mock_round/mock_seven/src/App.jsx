import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import React from "react";
import BasicModal from './components/BasicModal';








function App() {



const [data,setData]=useState([]);



const getData=()=>{
  axios.get("https://restcountries.com/v3.1/all")
.then((res)=>setData(res.data));
}
useEffect(()=>{
  getData()
},[])


console.log(data);
const handlesort=(e)=>{
let value=e.target.value;

if(value==="high"){
  data.sort((a,b)=>Number(a.population)-Number(b.population));
  setData(data);
}
else{
  data.sort((a,b)=>Number(b.population)-Number(a.population));
  setData(data);
}


}



const handlefilter=(e)=>{
  let value=e.target.value;
  console.log(value)
}
  return (
    <div className="App">
     <div className='filter_container'>
      <div>
        <label>Sort By Population</label>
       <select name="" id="" onChange={handlesort}>
        <option value="high">High to low</option>
        <option value="low">low to High</option>
       </select>
      </div>
      <div>
        <label htmlFor="">Filter By Region</label>
        <select name="" id="" onChange={handlefilter}>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
     </div>
     <div className='grid_container'>
   {data.map((item)=>(
    <div className='card-container'>
      <img src={item.flags.png} alt="" />
      <div>{item.name.common}</div>
      <div>Population:{item.population}</div>
      <div>Regions:{item.region}</div>
      <div>Capital:{item.capital}</div>
      <BasicModal item={item}/>
    </div>
   ))}
     </div>
    </div>
  );
}

export default App;
