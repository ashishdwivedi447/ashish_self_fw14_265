import React from 'react'
import {Routes,Route} from "react-router-dom"
import EditBook from './EditBook'
import SingleBook from './SingleBook'
import Books from './Books'
import Login from "./Login"
import RequireAuth from '../components/RequireAuth'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Books/>}></Route>
        <Route path="/books/:id" element={<SingleBook/>}></Route>
        <Route path="/books/:id/edit" element={<RequireAuth><EditBook/></RequireAuth>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<h3>Page not found</h3>}></Route>
    </Routes>
  )
}

export default MainRoutes