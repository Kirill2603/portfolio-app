import React from 'react'
import { Footer, Header, Hello, Scene, Skills, Technologies, Works } from './components'
import { Center, Flex, useMediaQuery } from '@chakra-ui/react'
import './app.css'

export const App = () => {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (

    <Center>
      <Flex direction='column' width={isLargerThan1280 ? '60%' : '90%'}>
        <Header />
        <Scene />
        <Hello />
        <Works />
        <Technologies isLargerThan1280={isLargerThan1280} />
        <Skills />
        <Footer />
      </Flex>
    </Center>

  )
}
