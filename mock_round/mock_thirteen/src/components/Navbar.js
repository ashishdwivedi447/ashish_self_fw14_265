import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around" fontSize="28px" backgroundColor="yellowgreen" color="red" alignItems="center">
<Link to="/">Authentication Page</Link>
<Link to="/admin">AdminPage</Link>
<Link to="/user">User</Link>

    </Box>
  )
}

export default Navbar