import React from 'react'
import { Alert, AlertIcon, Image, Box, Code, Flex, Text, Badge, HStack } from '@chakra-ui/react'
import myPhoto from '../assets/myPhoto.jpg'

export const Hello = () => {
  return (
    <>
      <Code p={2} mb={2} colorScheme={'green'} fontSize={'20px'}>
        Hello!
      </Code>
      <Code p={2} mb={2} colorScheme={'green'} fontSize={'20px'}>
        I'm a mobile developer specializing in Flutter, React Native & Swift UI
      </Code>
      <Alert status='success' variant='solid'>
        <AlertIcon />
        I specialize in creating beautiful cross-platform mobile applications
      </Alert>
      <Flex pt={10} justify={'space-between'} pb={5}>
        <Box pr={5}>
          <Text fontSize='3xl' mb={3}>Mobile Developer</Text>
          
          <Text fontSize='2xl' wordBreak={'break-word'} width={'90%'} mb={3}>
            Passionate about building high-performance mobile apps using Flutter, React Native, and Swift UI
          </Text>
          
          <Text fontSize='xl' wordBreak={'break-word'} width={'90%'} mb={4} color="gray.600" _dark={{ color: 'gray.300' }}>
            I create stunning cross-platform applications with Flutter, native iOS apps with Swift UI, and React Native solutions
          </Text>

          <HStack spacing={3} mb={4}>
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
              Flutter Expert
            </Badge>
            <Badge colorScheme="cyan" fontSize="sm" px={3} py={1}>
              React Native
            </Badge>
            <Badge colorScheme="orange" fontSize="sm" px={3} py={1}>
              Swift UI
            </Badge>
            <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
              Cross-Platform
            </Badge>
          </HStack>

          <Text fontSize='lg' wordBreak={'break-word'} width={'90%'} color="gray.500" _dark={{ color: 'gray.400' }}>
            Specialized in Flutter for cross-platform development, React Native for hybrid apps, and Swift UI for native iOS experiences
          </Text>
        </Box>
        <Image p={0.5} rounded='full' w='20vh' h='20vh' src={myPhoto} alt="Kirill Radobolsky" />
      </Flex>
    </>
  )
}
