import React from "react";
import {Box, Button, Center, Flex, Link, Spacer, Stack, Text, useColorMode} from '@chakra-ui/react'
import {SunIcon} from "@chakra-ui/icons";
import {FaGithub} from "react-icons/fa";


export const Header = () => {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <div>
            <Flex align={"end"}>

                <Spacer/>

                <Box p={2}>
                    <Text fontSize='3xl' fontWeight={'bold'}>Kirill Radobolsky</Text>
                </Box>

                <Spacer/>

                <Link p={2} fontSize='2xl'>Проекты</Link>

                <Center p={2}>
                    <FaGithub />
                    <Link pl={2} fontSize='2xl'>GitHub</Link>
                </Center>


                <Spacer/>
                <Spacer/>

                <Stack direction='row' p={2}>
                    <Button p={2}
                        onClick={toggleColorMode}
                        leftIcon={<SunIcon/>} variant='solid'>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </Stack>

                <Spacer/>

            </Flex>

        </div>
    )

}

