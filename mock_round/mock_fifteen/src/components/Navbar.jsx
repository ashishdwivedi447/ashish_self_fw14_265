import React from 'react'
import { Box } from '@chakra-ui/react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around" fontSize="30px" backgroundColor="yellow" color="red" alignItems="center">
<Link to="/">Home</Link>
<Link to="/playzone">Playzone</Link>
<Link to="/dashboard">Dashboard</Link>
    </Box>
  )
}

export default Navbar