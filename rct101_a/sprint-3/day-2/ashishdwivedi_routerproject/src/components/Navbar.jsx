import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div>AshishCart</div>
        <div>
    <Link to="/" className='link'>Home</Link>
        </div>
        <div>
        <Link to="/men"  className='link'>Men</Link>
        </div>
       
        <div>
        <Link to="/about"  className='link'>About Us</Link>
        </div>
        <div>
            <Link to="/cart"  className='link'>Cart</Link>
        </div>
    </div>
    
    </>
  )
}

export default Navbar