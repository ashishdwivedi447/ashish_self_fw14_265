import React from 'react'
import FilterSort from '../components/FilterSort'
import MusicRecords from './MusicRecords'
import styled from "styled-components"

const HomePage = () => {
  return (
    <div style={{display:"flex",heigth:"100vh"}}>
   
        
        <FilterSort style={{width:"200px",border:"1px solid red"}}/>
       <MusicRecords/>
    
 
   
    
    </div>
  )
}

export default HomePage

const Homepagewrapper=styled.div`
 display:flex,
 height:100vh
 `;

 const FiltersortWarpper=styled.div`
 width:200px,
 border:1px solid red
  `;

  const musicrecordWrapper=styled.div`
  width:100px,
  border:1px solid blue
  
  `;