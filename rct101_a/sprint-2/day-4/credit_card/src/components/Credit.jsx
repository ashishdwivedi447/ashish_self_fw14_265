import React from 'react'
import "./Credit.css"
import {SiVisa} from "react-icons/si"
import {FcSimCardChip} from "react-icons/fc";

const Credit = () => {
  return (
    <div>
        <div className='credit'>
   <SiVisa style={{fontSize:"55px",marginLeft:"200px"}} />
   <FcSimCardChip style={{fontSize:"40px",marginLeft:"20px"}}/>
   <div style={{marginTop:"5px",marginLeft:"50px"}}>4567 3478 3245 6789</div>
   <div style={{display:"flex",justifyContent:'space-evenly'}}>
    <div >Card Holder</div>
    <div>Expiry</div>
    <div>CVV</div>
   </div>
   <div style={{display:"flex",justifyContent:'space-evenly'}}>
    <div >John Smith</div>
    <div>09/24</div>
    <div>345</div>
   </div>
        </div>
    </div>
  )
}

export default Credit