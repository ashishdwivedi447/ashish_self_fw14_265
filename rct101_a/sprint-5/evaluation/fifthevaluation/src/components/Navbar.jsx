import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar' >
     <div>Navbar</div>
     <div><Link to="/" className='link'>Home</Link></div>
     <div><Link to="/login" className='link'>Login</Link></div>
     <div><Link to="/cart" className='link'><AiOutlineShoppingCart/></Link></div>
    </div>
  )
}

export default Navbar