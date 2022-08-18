import React from 'react'
import { Center, Flex, Progress, Text } from '@chakra-ui/react'

export const Skills = () => {

  const skills = [
    { id: 1, skill: 'HTML/CSS', progress: 90 },
    { id: 2, skill: 'Js/Ts', progress: 75 },
    { id: 3, skill: 'React', progress: 80 },
    { id: 4, skill: 'Redux', progress: 80 },
    { id: 5, skill: 'Axios', progress: 80 },
    { id: 6, skill: 'Thunk', progress: 75 },
    { id: 8, skill: 'Git', progress: 70 },
  ]

  return (
    <>
      <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'}>Skills</Text>
      {skills.map(skill =>
        <Flex justify={'space-between'} direction={'row'} pb={2} key={skill.id}>
          <Center bg='green.300' w={'15%'} h='6' minW={'min-content'}>
            {skill.skill}
          </Center>
          <Progress colorScheme='green' h='6' value={skill.progress} hasStripe w={'100%'} />
          <Center bg='green.500' minW={'max-content'} pl={2} pr={2}>
            {skill.progress} %
          </Center>
        </Flex>)}
    </>
  )
}
