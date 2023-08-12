import React from 'react'
import { Box } from '@chakra-ui/react'
import {Routes,Route} from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import Quiz from "./Quiz";
import Results from "./Results";

const MainRoutes = () => {
  return (
    <Box>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/results" element={<Results/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
    </Box>
  )
}

export default MainRoutes