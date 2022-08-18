import React, { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { FaGit, FaGithub, FaReact, FaUbuntu } from 'react-icons/fa'
import {
  SiChakraui,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiRedux, SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebstorm,
} from 'react-icons/si'

import { DiMongodb } from 'react-icons/di'

type TechnologiesProp = {
  isLargerThan1280: boolean
}

export const Technologies: FC<TechnologiesProp> = ({ isLargerThan1280 }) => {

  const technologies = [
    { name: 'React', icon: FaReact },
    { name: 'Redux Toolkit', icon: SiRedux },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Git', icon: FaGit },
    { name: 'Github', icon: FaGithub },
    { name: 'Styled Components', icon: SiStyledcomponents },
    { name: 'Tailwindcss', icon: SiTailwindcss },
    { name: 'ChakraUI', icon: SiChakraui },
    { name: 'Express JS', icon: SiExpress },
    { name: 'MongoDB', icon: DiMongodb },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Webstorm', icon: SiWebstorm },
    { name: 'Ubuntu Linux', icon: FaUbuntu },
  ]

  return (
    <>
      <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'}>My top Tech Stack</Text>

      <Flex direction='row' flexWrap='wrap' justifyContent='space-around'>
        {technologies.map(technology =>
          <Flex key={technology.name} direction='column' alignItems='center' p={isLargerThan1280 ? 7 : 3}>
            <Icon as={technology.icon} w={20} h={20} />
            <Text fontSize='xl'>{technology.name}</Text>
          </Flex>,
        )}
      </Flex>
    </>
  )
}
