import React from 'react'
import Home from "../Pages/Home"
import Products from '../Pages/Products'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
  <Link to="/">Home</Link>
  <Link to="/products">AllProducts</Link>
    </div>
  )
}

export default Navbar