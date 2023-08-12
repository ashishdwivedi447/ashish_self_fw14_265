import React from 'react'
import { Input } from '@chakra-ui/react'
import {FiUser} from "react-icons/fi"
import {BsCreditCard2Back} from "react-icons/bs"
import {AiFillLock} from "react-icons/ai"
import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
  return (
    <div>
        <p>Payment Details</p>
        <div className='form'>
            <div>
                <label htmlFor="">CARDHOLDER NAME</label>
                <div style={{display:"flex",alignItems:"center"}}>
                    <FiUser/>
                <Input variant='flushed' width="250px" />
                </div>
            </div>
            <div>
                <label htmlFor="">CARD NUMBER</label>
                <div style={{display:"flex",alignItems:"center"}}>
                    <BsCreditCard2Back/>
                <Input variant='flushed' width="250px" />
                </div>
            </div>
            <div>
                
                <label htmlFor="">EXPIRY</label>
                <div style={{display:"flex",alignItems:"center"}}>
                    
                <Input type="date" variant='flushed' width="250px" />
                </div>
                <span>
                <label htmlFor="">CVV</label>
                <div style={{display:"flex",alignItems:"center"}}>
                    <AiFillLock/>
                    <Input type="Number" variant='flushed' width="100px" />
                    </div>
            </span>
            </div>
           
        </div>
        <div style={{marginTop:"30px"}}>Payment Amount: <span style={{color:"pink"}}>12300</span></div>
        <Button colorScheme='red' size='lg' style={{marginTop:"30px"}}>
    Pay
  </Button>
    </div>
  )
}

export default Form