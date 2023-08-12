import React from 'react'
import { Box } from '@chakra-ui/react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around" backgroundColor="tomato" fontSize="32px" color="white" alignItems="center">
<Link to="/">Home</Link>
<Link to="quiz">Quiz</Link>
<Link to="/results">Results</Link>
<Link to="/dashboard">Dashboard</Link>
    </Box>
  )
}

export default Navbar