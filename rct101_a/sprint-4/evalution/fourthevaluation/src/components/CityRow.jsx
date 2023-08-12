import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CityRow.module.css";

function CityRow({}) {

  const [result,setResult]=useState([]);
  useEffect(()=>{

    fetch("https://json-server-mocker-masai.herokuapp.com/cities")
    .then((r)=>r.json())
    .then((d)=>setResult(d));;
  })

  return (
    <>
    {result.map((e)=>(
   <tr data-testid="countries-container" className={styles.container}>
   <td> {e.id}</td>
   <td> {e.name} </td>
   <td> {e.country}</td>
   <td> {e.population} </td>
   </tr>
    ))}
 
      
    
    </>
  );
}

export default CityRow;
