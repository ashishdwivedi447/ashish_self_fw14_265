import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
    const {isAuth,toggleAuth}=useContext(AuthContext);
  return (
    <div>Navbar
        <div><button onClick={toggleAuth}>{isAuth ? "logout" :"login"}</button></div>
    </div>
  )
}

export default Navbar