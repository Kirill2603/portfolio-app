import React from 'react'
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Flex,
  Badge,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { 
  FaTrophy, 
  FaStar, 
  FaDownload, 
  FaUsers, 
  FaCode, 
  FaMobile,
  FaAward,
  FaRocket
} from 'react-icons/fa'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ComponentType
  color: string
  value: string
  category: string
}

const achievements: Achievement[] = [
  {
    id: 'apps-published',
    title: 'Apps Published',
    description: 'Mobile applications published on App Store',
    icon: FaMobile,
    color: 'blue',
    value: '5+',
    category: 'Mobile Development'
  },
  {
    id: 'downloads',
    title: 'Total Downloads',
    description: 'Combined downloads across all published apps',
    icon: FaDownload,
    color: 'green',
    value: '10K+',
    category: 'User Reach'
  },
  {
    id: 'projects',
    title: 'Projects Completed',
    description: 'Successfully delivered mobile and web projects',
    icon: FaCode,
    color: 'purple',
    value: '15+',
    category: 'Development'
  },
  {
    id: 'performance',
    title: 'Performance Improvement',
    description: 'Average performance boost achieved in apps',
    icon: FaRocket,
    color: 'orange',
    value: '40%',
    category: 'Optimization'
  },
  {
    id: 'mentoring',
    title: 'Developers Mentored',
    description: 'Junior developers guided and trained',
    icon: FaUsers,
    color: 'teal',
    value: '3+',
    category: 'Leadership'
  },
  {
    id: 'rating',
    title: 'Average App Rating',
    description: 'Average user rating across published apps',
    icon: FaStar,
    color: 'yellow',
    value: '4.8★',
    category: 'Quality'
  }
]

export const Achievements = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const cardBg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Box mb={8}>
      <Heading size="xl" mb={6} textAlign="center">
        <FaTrophy style={{ display: 'inline', marginRight: '12px' }} />
        Achievements & Stats
      </Heading>
      
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {achievements.map((achievement) => (
          <GridItem key={achievement.id}>
            <Box
              bg={bgColor}
              borderRadius="xl"
              p={6}
              border="1px solid"
              borderColor={borderColor}
              height="100%"
              transition="all 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'lg',
                borderColor: `${achievement.color}.300`
              }}
            >
              <VStack spacing={4} align="center" textAlign="center">
                <Box
                  bg={`${achievement.color}.100`}
                  borderRadius="full"
                  p={4}
                  color={`${achievement.color}.500`}
                >
                  <Icon as={achievement.icon} boxSize={8} />
                </Box>
                
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color={`${achievement.color}.500`}>
                    {achievement.value}
                  </Text>
                  <Heading size="md" color="gray.700" _dark={{ color: 'gray.200' }}>
                    {achievement.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }} textAlign="center">
                    {achievement.description}
                  </Text>
                </VStack>
                
                <Badge colorScheme={achievement.color} variant="subtle">
                  {achievement.category}
                </Badge>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Additional Highlights */}
      <Box mt={8} bg={cardBg} borderRadius="xl" p={6} border="1px solid" borderColor={borderColor}>
        <Heading size="lg" mb={4} textAlign="center" color="blue.500">
          <FaAward style={{ display: 'inline', marginRight: '8px' }} />
          Key Highlights
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
          <VStack spacing={2} align="start">
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Published 5+ mobile apps on App Store
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Achieved 40% performance improvement through optimization
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Led development of 3 major mobile projects
            </Text>
          </VStack>
          <VStack spacing={2} align="start">
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Mentored 3+ junior developers
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Maintained 4.8★ average app rating
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              • Contributed to open-source Flutter projects
            </Text>
          </VStack>
        </Grid>
      </Box>
    </Box>
  )
}
