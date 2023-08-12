import React from 'react'
import { Box } from '@chakra-ui/react'
import {Routes,Route} from "react-router-dom";
import Playzone from './Playzone';
import Dashboard from './Dashboard';
import Home from './Home';

const MainRoutes = () => {
  return (
    <Box>
<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/playzone" element={<Playzone/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
    </Box>
  )
}

export default MainRoutes