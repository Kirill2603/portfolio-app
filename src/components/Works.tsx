import React from 'react'
import {
  Text,
  Image,
  Flex,
  useMediaQuery,
  Heading,
  Divider,
  Grid,
  GridItem,
  Box,
  Badge,
  Button,
  Link,
} from '@chakra-ui/react'
import { FaEye, FaGithub } from 'react-icons/fa'
import { projects } from '../data'
import { ImageSlider } from './ImageSlider'

export const Works = () => {
  const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)')

  const onPressNavigateButton = (link: string | null) => {
    link !== null && window.open(link, '_blank')
  }

  return (
    <>
      <Text pt={2} fontSize='3xl' fontWeight={'bold'}>
        Projects
      </Text>
      <Divider pb={5} opacity={0} />
      <Grid gridTemplateColumns={isLargerThan1050 ? 'repeat(3, 1fr)' : '1fr'} gap={8}>
        {projects.map(project => (
          <GridItem key={project.id}>
            <Flex
              p={4}
              gap={3}
              flexDirection={'column'}
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              bg='white'
              _dark={{ bg: 'gray.800' }}
              shadow='md'
              transition='all 0.2s'
              _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}>
              {/* Project Header */}
              <Flex direction='column' gap={2}>
                <Flex align={'flex-start'} gap={4}>
                  {project.icon && (
                    <Image
                      backgroundSize='cover'
                      minW={'60px'}
                      w={'60px'}
                      h={'60px'}
                      borderRadius='xl'
                      overflow={'hidden'}
                      src={project.icon}
                      alt={project.title}
                    />
                  )}

                  <Flex align={'flex-start'} flexDirection={'column'} flex='1'>
                    <Heading size='lg' textAlign='left' mb={1}>
                      {project.title}
                    </Heading>
                    <Heading size='sm' color={'gray.500'} mb={0}>
                      {project.subtitle}
                    </Heading>
                  </Flex>
                </Flex>
                <Text fontSize='sm' color='gray.600' _dark={{ color: 'gray.300' }}>
                  {project.description}
                </Text>
              </Flex>

              {/* Image Slider */}
              <Box >
                <ImageSlider images={project.images} projectTitle={project.title} />
              </Box>

              {/* Technologies */}
              <Box >
                <Flex wrap='wrap' gap={2}>
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} colorScheme='green' variant='subtle'>
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>

              {/* Action Buttons */}
              <Flex  gap={2} justify='flex-end'>
                {project.source && (
                  <Button
                    leftIcon={<FaGithub />}
                    size='sm'
                    variant='outline'
                    onClick={() => onPressNavigateButton(project.source)}>
                    Source
                  </Button>
                )}
                <Button
                  leftIcon={<FaEye />}
                  size='sm'
                  colorScheme='blue'
                  onClick={() => onPressNavigateButton(project.look)}>
                  View
                </Button>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
