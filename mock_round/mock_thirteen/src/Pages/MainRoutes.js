import React from 'react'
import {Routes,Route} from "react-router-dom"
import UserPage from './UserPage'

import AdminPage from './AdminPage'
import Jobform from './Jobform'
import Joblisting from './Joblisting'
import Landing from './Landing'

const MainRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/"  element={<Landing />}/>
    <Route path="/user" element={<UserPage/>} />
    
    <Route path="/admin" element={<AdminPage/>}>
      <Route path="jobform" element={<Jobform/>}/>
      <Route path="joblisting" element={<Joblisting/>}/>
    </Route>
</Routes>
    </div>
  )
}

export default MainRoutes