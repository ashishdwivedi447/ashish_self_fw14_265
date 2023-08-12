import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Homepage from './Homepage'
import SingleTodo from './SingleTodo'
import Edit from "./Edit"
import Login from './Login'
import ReqAuth from '../components/ReqAuth'

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ReqAuth><Homepage/></ReqAuth>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/todos/:id" element={<SingleTodo/>}/>
            <Route path="/todos/:id/edit" element={<Edit/>}/>
            <Route path="*" element={<h3>Page not found</h3>}/>
        </Routes>
    </div>
  )
}

export default Pages