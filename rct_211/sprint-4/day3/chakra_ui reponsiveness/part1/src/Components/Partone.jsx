import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'


const Partone = () => {
 
  return (
    <div>
        <Grid  color="white" fontSize="40px" templateColumns='repeat(3, 1fr)' >
  <GridItem pt="200" h='500' bg='blue.500' >NAV</GridItem>
  <GridItem pt="200" h='500' bg='orange.500'>CONTENT</GridItem>
  <GridItem pt="200" h='500' bg='red.500' >WIDGET</GridItem>
  
</Grid>
    </div>
  )
}

export default Partone