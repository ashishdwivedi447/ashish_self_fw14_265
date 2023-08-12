import React from 'react'

import {Routes,Route} from "react-router-dom"
import Todo from '../components/Todo'
import SingleTodo from './SingleTodo'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/:id" element={<SingleTodo/>}></Route>
    </Routes>
  )
}

export default MainRoutes