import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{backgroundColor:"silver", fontSize:"25px",display:"flex" ,justifyContent:"space-around"}}>
<Link to="/">Admin Login</Link>
<Link to="/userdetails">User</Link>
    </div>
  )
}

export default Navbar