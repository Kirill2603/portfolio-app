import React from 'react';
import {Alert, AlertIcon, Avatar, Box, Center, Code, Flex, Stack, Text} from "@chakra-ui/react";

function App() {

    return (
        <>
            <Center>
                <Stack direction='column' >
                    <Code colorScheme={"green"} fontSize={'20px'}>
                        Hello!
                    </Code>
                    <Code colorScheme={"green"} fontSize={'20px'}>
                        I am Frontend Developer from Minsk
                    </Code>
                    <Alert status='success' variant='solid'>
                        <AlertIcon />
                        Data uploaded to the server. Fire on!
                    </Alert>
                    <Flex pt={5}>
                        <Box pr={5}>
                            <Text fontSize='3xl'>Krill Radobolsky</Text>
                            <Text fontSize='2xl' wordBreak={"break-word"} width={"80%"}>Digital Craftsman
                                ( Developer / Designer )</Text>
                        </Box>
                        <Avatar p={0.5} size={"2xl"} src={'https://avatars.githubusercontent.com/u/64753246?v=4'}/>
                    </Flex>


                </Stack>


            </Center>


        </>
    );
}

export default App;