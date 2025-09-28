import React from 'react'
import { Footer, Header, Hello, Scene,  Technologies, Works } from './components'
import { Center, Flex, useMediaQuery } from '@chakra-ui/react'
import { MEDIA_QUERIES } from './constants'
import './app.css'

export const App = () => {
  const [isLargerThan1280] = useMediaQuery(MEDIA_QUERIES.LARGER_THAN_1280)

  return (
    <Center>
      <Flex direction='column' width={isLargerThan1280 ? '75%' : '90%'} pt="80px">
        <Header />
        <Scene />
        <Hello />
        <Works />
        <Technologies isLargerThan1280={isLargerThan1280} />
        <Footer />
      </Flex>
    </Center>
  )
}
