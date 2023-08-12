import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import  "./Cart.css"

const Cart = () => {
  
  const {cart}=useContext(CartContext)
  
  return (
    <div className='cart'>
      {cart.map((e)=>(
        <div>
          <div><img src={e.imageurl} alt="" /></div>
          <div>{e.brand}</div>
          <div>{e.type}</div>
          <div>{e.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Cart