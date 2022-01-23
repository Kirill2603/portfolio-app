import React from 'react'
import {Box, Text, Image, Badge, Link, Grid, GridItem, Flex, useMediaQuery} from "@chakra-ui/react";
import {FaEye, FaGithub} from "react-icons/fa";

export const Works = () => {

    const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)')

  return (
      <Box pb={10} >
          <Text pt={2} fontSize='3xl' fontWeight={'bold'}>Works</Text>


          <Grid templateColumns={isLargerThan1050 ? 'repeat(3, 1fr)': 'repeat(1, 1fr)'}  gap={6}>

              <GridItem  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                  <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'} textAlign={"center"}>Todo List</Text>

                  <Image w={"100%"} src={'https://bit.ly/2Z4KKcF'}/>

                  <Box p='3'>
                      <Box display='flex' alignItems='center' justifyContent={"space-between"}>
                          <Badge borderRadius='full' px='2' colorScheme='teal'>
                              In progress
                          </Badge>
                          <Flex alignItems={"center"}
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='ml'>
                              <FaGithub />
                              <Link p={2} href='https://github.com/Kirill2603'>Source</Link>
                          </Flex>
                          <Flex alignItems={"center"}
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='ml'>
                              <FaEye />
                              <Link p={2} href='https://github.com/Kirill2603'>Look</Link>

                          </Flex>
                      </Box>
                  </Box>
              </GridItem>

              <GridItem  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                  <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'} textAlign={"center"}>Todo List</Text>

                  <Image w={"100%"} src={'https://bit.ly/2Z4KKcF'}/>

                  <Box p='3'>
                      <Box display='flex' alignItems='center' justifyContent={"space-between"}>
                          <Badge borderRadius='full' px='2' colorScheme='teal'>
                              In progress
                          </Badge>
                              <Flex alignItems={"center"}
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='ml'>
                                  <FaGithub />
                                  <Link p={2} href='https://github.com/Kirill2603'>Source</Link>
                              </Flex>
                              <Flex alignItems={"center"}
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='ml'>
                                  <FaEye />
                                  <Link p={2} href='https://github.com/Kirill2603'>Look</Link>

                          </Flex>
                      </Box>
                  </Box>
              </GridItem>

              <GridItem  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                  <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'} textAlign={"center"}>Counter</Text>

                  <Image w={"100%"} src={'https://bit.ly/2Z4KKcF'}/>

                  <Box p='3'>
                      <Box display='flex' alignItems='center' justifyContent={"space-between"}>
                          <Badge borderRadius='full' px='2' colorScheme='teal'>
                              In progress
                          </Badge>
                          <Flex alignItems={"center"}
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='ml'>
                              <FaGithub />
                              <Link p={2} href='https://github.com/Kirill2603'>Source</Link>
                          </Flex>
                          <Flex alignItems={"center"}
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='ml'>
                              <FaEye />
                              <Link p={2} href='https://github.com/Kirill2603'>Look</Link>

                          </Flex>
                      </Box>
                  </Box>
              </GridItem>


          </Grid>
      </Box>
  )
}