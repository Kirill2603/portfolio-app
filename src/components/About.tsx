import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Badge,
  HStack,
  VStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCode, FaMobile, FaRocket, FaHeart } from 'react-icons/fa'

export const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box
      bg={bgColor}
      borderRadius="xl"
      p={8}
      border="1px solid"
      borderColor={borderColor}
      mb={8}
    >
      <Heading size="xl" mb={6} textAlign="center">
        About Me
      </Heading>
      
      <VStack spacing={6} align="stretch">
        {/* Personal Story */}
        <Box>
          <Heading size="md" mb={3} color="blue.500">
            <FaHeart style={{ display: 'inline', marginRight: '8px' }} />
            My Story
          </Heading>
          <Text fontSize="lg" lineHeight="1.7" color="gray.600" _dark={{ color: 'gray.300' }}>
            I'm a passionate mobile developer from Minsk, Belarus, with over 3 years of experience 
            creating innovative mobile applications. My journey began with web development, but I quickly 
            fell in love with mobile development and the endless possibilities it offers.
          </Text>
        </Box>

        <Divider />

        {/* What I Do */}
        <Box>
          <Heading size="md" mb={3} color="green.500">
            <FaCode style={{ display: 'inline', marginRight: '8px' }} />
            What I Do
          </Heading>
          <Text fontSize="lg" lineHeight="1.7" color="gray.600" _dark={{ color: 'gray.300' }} mb={4}>
            I specialize in creating beautiful, high-performance mobile applications using modern technologies:
          </Text>
          <HStack spacing={3} wrap="wrap">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
              Flutter Development
            </Badge>
            <Badge colorScheme="cyan" fontSize="sm" px={3} py={1}>
              React Native
            </Badge>
            <Badge colorScheme="orange" fontSize="sm" px={3} py={1}>
              Swift UI
            </Badge>
            <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>
              Cross-Platform Apps
            </Badge>
            <Badge colorScheme="teal" fontSize="sm" px={3} py={1}>
              UI/UX Design
            </Badge>
          </HStack>
        </Box>

        <Divider />

        {/* Goals */}
        <Box>
          <Heading size="md" mb={3} color="purple.500">
            <FaRocket style={{ display: 'inline', marginRight: '8px' }} />
            My Goals
          </Heading>
          <Text fontSize="lg" lineHeight="1.7" color="gray.600" _dark={{ color: 'gray.300' }}>
            I'm looking for opportunities to work with innovative companies where I can contribute 
            to meaningful projects, learn from experienced developers, and help create mobile 
            experiences that make a difference in people's lives.
          </Text>
        </Box>

        <Divider />

        {/* Fun Facts */}
        <Box>
          <Heading size="md" mb={3} color="pink.500">
            <FaMobile style={{ display: 'inline', marginRight: '8px' }} />
            Fun Facts
          </Heading>
          <VStack spacing={2} align="start">
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • I've published 5+ mobile apps on the App Store
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • I love contributing to open-source Flutter projects
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • I enjoy mentoring junior developers
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • I'm always learning new mobile technologies
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}
