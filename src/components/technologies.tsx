import React from "react";
import {Box, Center, Grid, GridItem, Text} from '@chakra-ui/react'
import {Icon} from "@chakra-ui/icons";
import {FaGit, FaReact} from "react-icons/fa";
import {SiChakraui, SiRedux, SiTypescript} from "react-icons/si";

export const Technologies = () => {
    return (
        <>
            <Text pt={10} pb={2} fontSize='3xl' fontWeight={'bold'}>My top Tech Stack</Text>

            <Grid templateColumns='repeat(5, 1fr)' gap={6} pt={5} pb={5}>
                <GridItem>
                    <Center>
                        <Icon as={FaReact} w={20} h={20}/>
                    </Center>
                    <Center p={3}>
                        <Text>React</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Icon as={SiRedux} w={20} h={20}/>
                    </Center>
                    <Center p={3}>
                        <Text>Redux</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Icon as={SiTypescript} w={20} h={20}/>
                    </Center>
                    <Center p={3}>
                        <Text>TypeScript</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Icon as={FaGit} w={20} h={20}/>
                    </Center>
                    <Center p={3}>
                        <Text>Git</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Icon as={SiChakraui} w={20} h={20}/>
                    </Center>
                    <Center p={3}>
                        <Text>ChakraUI</Text>
                    </Center>
                </GridItem>
            </Grid>
        </>
    )
}