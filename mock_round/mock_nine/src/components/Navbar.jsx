import React from 'react'
import {Link} from "react-router-dom"
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around" fontSize="35px" backgroundColor="yellow">
<Link to="/login">Login</Link>
<Link to="/">Restaurant</Link>
    </Box>
  )
}

export default Navbar