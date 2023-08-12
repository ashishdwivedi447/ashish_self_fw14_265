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

const Inspiration = () => {
  return (
    <div>
        <Menu>
  <MenuButton>
    Inspiration
  </MenuButton>
  <MenuList>
    <MenuItem>
     Explore Design work
    </MenuItem>
    <MenuItem>New & Noteworthy</MenuItem>
    
    
  </MenuList>
</Menu>
    </div>
  )
}

export default Inspiration