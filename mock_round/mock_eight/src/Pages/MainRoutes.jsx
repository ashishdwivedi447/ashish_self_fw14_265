import React from 'react'
import {Routes,Route} from "react-router-dom"
import Adminlogin from '../components/Adminlogin'
import User from '../components/User'
import Admin from './Admin'
import Edit from './Edit'
import Hotel from './Hotel'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Adminlogin/>}/>
            <Route path="/userdetails" element={<User/>} />
           <Route path="/admin" element={<Admin/>}/>
          <Route path="Hotel" element={<Hotel/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          
        </Routes>
    </div>
  )
}

export default MainRoutes