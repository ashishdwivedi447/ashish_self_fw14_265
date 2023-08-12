import React from 'react'
import {Routes,Route} from "react-router-dom";
import RequireAuth from '../components/RequireAuth';
import Login from './Login';
import Restaurant from './Restaurant';

const MainRoutes = () => {
    
  return (
    <div>
<Routes>
    <Route path="/" element={<RequireAuth><Restaurant/></RequireAuth>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart"/>
</Routes>
    </div>
  )
}

export default MainRoutes