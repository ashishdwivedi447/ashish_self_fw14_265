import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Text } from '@chakra-ui/react';
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {AiOutlineStar} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {BiTrendingUp} from "react-icons/bi"

function App() {
  

  return (
    <div className="App">
      <div className='sidebar'>
   <div style={{fontWeight:"bolder" ,paddingTop:"20px",paddingLeft:"30px"}}> <Text fontSize='2xl'>Logo</Text></div>
   
   <div className='content-box'>
    <div className='content'>
    <div><AiOutlineHome/></div>
      <div>Home</div>
    </div>
    <div className='content'>
    <div><BiTrendingUp/></div>
      <div>Trending</div>
    </div>
    <div className='content'>
    <div><MdOutlineExplore/></div>
      <div>Explore</div>
    </div>
    <div className='content'>
    <div><AiOutlineStar/></div>
      <div>Favourites</div>
    </div>
    <div className='content'>
    <div><FiSettings/></div>
      <div>Setting</div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default App
