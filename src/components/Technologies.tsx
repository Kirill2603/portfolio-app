import React, { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { technologies } from '../data'
import { TechnologiesProp } from '../types'

export const Technologies: FC<TechnologiesProp> = ({ isLargerThan1280 }) => {
  return (
    <>
      <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'}>Technologies & Tools</Text>
      <Text pb={4} fontSize='lg' color='gray.600' _dark={{ color: 'gray.300' }}>
        Mobile development, web technologies, and development tools I work with
      </Text>

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
