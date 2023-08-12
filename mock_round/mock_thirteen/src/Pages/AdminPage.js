import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import { Box ,Text} from '@chakra-ui/react'

const AdminPage = () => {
  return (
    <Box>
        <Text margin="10px 0 0 560px" fontSize="25px" color="teal">You are in the Admin Page!</Text>
        <Box display="flex" gap="150px" fontSize="22px" justifyContent="center" color="tomato">
<Link to="/admin/jobform">Jobform</Link>
<Link to="/admin/joblisting">Joblisting</Link>
        </Box>
        <Outlet/>
    </Box>
  )
}

export default AdminPage