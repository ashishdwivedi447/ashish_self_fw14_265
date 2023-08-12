import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const Find = () => {
  return (
    <div>
          <Menu>
  <MenuButton>
    Find Work
  </MenuButton>
  <MenuList>
    <MenuItem>
     JOB BOARD
    </MenuItem>
    <MenuItem>Freelance Projects</MenuItem>
    
    
  </MenuList>
</Menu>
    </div>
  )
}

export default Find