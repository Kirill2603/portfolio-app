import React from 'react'
import { Alert, AlertIcon, Image, Box, Code, Flex, Text } from '@chakra-ui/react'
import myPhoto from 'assets/myPhoto.jpg'

export const Hello = () => {
  return (
    <>
      <Code p={2} mb={2} colorScheme={'green'} fontSize={'20px'}>
        Hello!
      </Code>
      <Code p={2} mb={2} colorScheme={'green'} fontSize={'20px'}>
        I'm Front End Web Developer based in Minsk
      </Code>
      <Alert status='success' variant='solid'>
        <AlertIcon />
        I enjoy building beautiful responsive websites and apps
      </Alert>
      <Flex pt={10} justify={'space-between'} pb={5}>
        <Box pr={5}>
          <Text fontSize='3xl'>Front-end developer</Text>
          <Text fontSize='2xl' wordBreak={'break-word'} width={'80%'}>
            With experience in creating Landing Pagesand SPA, using React(JS/TS), Redux, AXIOS/REST API</Text>
        </Box>
        <Image p={0.5} rounded='full' w='20vh' h='20vh' src={myPhoto} />
      </Flex>
    </>
  )
}
