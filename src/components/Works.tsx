import React from 'react'
import {
  Box,
  Text,
  Image,
  Badge,
  Link,
  Flex,
  useMediaQuery,
  Heading,
  Button,
  Divider,
} from '@chakra-ui/react'
import { FaEye, FaGithub } from 'react-icons/fa'
import calendarImg from 'assets/Calendar/1.jpg'
import chessImg from 'assets/Chess/1.jpg'
import NativeCalc from 'assets/NativeCalculator/NativeCalculator.jpg'
import githubSearchImg from 'assets/githubApi/githubApi.jpg'
import TodoImg from 'assets/Todo.png'
import NoiseImg from 'assets/Noise/noise.webp'

export const Works = () => {

  const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)')

  const projects = [
    {
      name: 'Noise App',
      source: 'https://github.com/Kirill2603/react-noise',
      look: 'https://react-noise.vercel.app/',
      inProgress: false,
      image: NoiseImg,
      description: 'Choose a sound environment that helps you concentrate',
      technologies: ['React', 'Redux Toolkit', 'TailwindCSS', 'TypeScript', 'DayJS'],
    },
    {
      name: 'Calendar',
      source: 'https://github.com/Kirill2603/calendar',
      look: 'https://calendar-one-blush.vercel.app/',
      inProgress: true,
      image: calendarImg,
      description: 'Calendar with a view of the month or year where you can leave your notes, as well as see the weather in your city for the next week',
      technologies: ['React', 'Redux Toolkit', 'RTK Query', 'TailwindCSS', 'Express', 'MongoDB', 'TypeScript', 'DayJS'],
    },
    {
      name: 'Chess 3D',
      source: 'https://github.com/Kirill2603/3d-chess-v2',
      look: 'https://chesss-3d.netlify.app/',
      inProgress: true,
      image: chessImg,
      description: 'Classic chess game with 3D view.',
      technologies: ['React', 'ThreeJS', 'React Three Fiber', 'Redux Toolkit', 'ChakraUI', 'TypeScript'],
    },
    {
      name: 'Github Search',
      source: 'https://github.com/Kirill2603/paralect-test',
      look: 'https://paralect-test-app.netlify.app/',
      inProgress: false,
      image: githubSearchImg,
      description: 'Search information about the user and his repositories by Gidhub API',
      technologies: ['React', 'Redux Toolkit', 'RTK Query', 'SCSS', 'TypeScript'],
    },
    {
      name: 'React Native Calculator',
      source: 'https://github.com/Kirill2603/native-calculator',
      look: 'https://github.com/Kirill2603/native-calculator',
      inProgress: false,
      image: NativeCalc,
      description: 'Simple React Native calculator app ',
      technologies: ['React Native', 'SCSS', 'TypeScript'],
    },
    {
      name: 'Todo App',
      source: 'https://github.com/Kirill2603/mytodolist',
      look: 'https://github.com/Kirill2603/mytodolist',
      inProgress: false,
      image: TodoImg,
      description: 'To-do list with the ability to sort and search for tasks',
      technologies: ['React', 'Redux', 'Axios', 'Thunk', 'Chakra UI', 'TypeScript'],
    },
  ]

  return (
    <>
      <Text pt={2} fontSize='3xl' fontWeight={'bold'}>Works</Text>
      <Flex flexWrap='wrap' justify='space-between'>
        {projects.map(project =>
          <Box
            key={project.name}
            boxSize={isLargerThan1050 ? '49%' : 'full'}
            my={2}
            borderWidth='2px'
            borderRadius='lg'>
            <Heading size='xl' textAlign='center' p={2}>
              {project.name}
            </Heading>
            <Flex overflow={'hidden'} justify='center'>
              <Image backgroundSize='cover' maxHeight='xs' src={project.image} alt={project.name}
                     transition='all 0.5s ease-out'
                     _hover={{ transform: 'scale(1.15)' }} />
            </Flex>
            <Flex p={2} justify='flex-start' alignItems='end'>
              <Button leftIcon={<FaGithub />} ml={1} size='md' colorScheme='teal' variant='ghost'>
                <Link href={project.source} target='_blank'>
                  Sourse
                </Link>
              </Button>
              <Button leftIcon={<FaEye />} ml={1} size='md' colorScheme='teal' variant='ghost'>
                <Link href={project.look} target='_blank'>
                  Look
                </Link>
              </Button>
              {project.inProgress && <Text w='full' textAlign='end'>App in development...</Text>}
            </Flex>
            <Divider />
            <Flex direction='row' justify='flex-start' wrap='wrap' align='center'>
              <Text fontSize='xl' fontWeight='bold' px={2}>
                Stack:
              </Text>
              {project.technologies.map(technology =>
                <Badge key={technology} variant='subtle' fontSize='sm' colorScheme='blue' my={1} mx={2}>
                  {technology}
                </Badge>,
              )}
            </Flex>
            <Divider />
            <Text px={2} fontSize='xl' fontWeight='normal'><b>Description:</b> {project.description}</Text>
          </Box>,
        )}
      </Flex>
    </>
  )
}
