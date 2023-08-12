import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Collapse, Text } from '@chakra-ui/react';
import Inspiration from './components/Inspiration'; 
import Find from "./components/Find";
import { Button, ButtonGroup } from '@chakra-ui/react'


function App() {
  
// const [border,setBorder]=useState(false);
// // const onClick=()=>{
// //  if(!border){
// //   {border ? "border" :null}
  
// //  }
// // }

  return (
    <div className="App">
     <div className='navbar'>
      <div className='first_part'>
        <div>  <Text  style={{fontWeight:"bolder"}}fontSize='xl'>Login</Text></div>
        <div><Inspiration/></div>
        <div><Find/></div>
        <div>Learn Design</div>
        <div>Hire Designers</div>

      </div>
      <div className='secpart'>
        <div> <Button colorScheme='teal' variant='outline' size='xs'>
    Sign in
  </Button></div>
        <div>  <Button colorScheme='pink' variant='solid'>
  Sign Up
  </Button></div>
      </div>
     </div>
    </div>
  )
}

export default App
