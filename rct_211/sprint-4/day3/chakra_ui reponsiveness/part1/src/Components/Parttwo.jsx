import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

const Parttwo = () => {
  return (
    <div>
        <Grid mt="100px" ml="400px" templateRows='repeat(3, 1fr)' gap={3}>
  <GridItem w='400px' h='100' bg='red.500' />
  <GridItem w='400px' h='100' bg='teal.500' />
  <GridItem w='400px' h='100' bg='pink.500' />

</Grid>
    </div>
  )
}

export default Parttwo