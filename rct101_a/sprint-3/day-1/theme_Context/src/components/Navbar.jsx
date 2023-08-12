import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {

    const {islight,ToggleTheme,theme}=useContext(ThemeContext);
  return (
    <div>Navbar
         <button onClick={ToggleTheme}>{`Make ${theme==="light" ? "dark" :"light"}`}</button>
    </div>
  )
}

export default Navbar