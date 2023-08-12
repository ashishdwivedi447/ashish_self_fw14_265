import React from 'react'
import {Routes,Route} from "react-router-dom";
import RequireAuth from '../components/RequireAuth';
import EditMusicRecords from './EditMusicRecords';
import HomePage from './HomePage';
import Login from './Login';

import SingleMusicRecords from './SingleMusicRecords';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/music/:id" element={<RequireAuth><SingleMusicRecords/></RequireAuth>}/>
        <Route path="/music/:id/edit" element={<EditMusicRecords/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h3>Page not found</h3>}/>
   
    </Routes>
  )
}

export default MainRoutes