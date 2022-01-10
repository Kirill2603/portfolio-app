import {Center, ChakraProvider, Flex, useMediaQuery} from "@chakra-ui/react";
import {Header} from "./header";
import {Scene} from "./scene";
import Hello from "./Hello";
import {Skills} from "./skills";
import {Works} from "./works";
import {Footer} from "./Footer";
import React from "react";

export const App = () => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    return (
        <ChakraProvider resetCSS>
            <Center>
                <Flex direction='column' width={isLargerThan1280 ? '50%' : '90%'}>
                    <Header/>
                    <Scene/>
                    <Hello/>
                    <Skills/>
                    <Works/>
                    <Footer/>
                    <div>Hello Motherfucker!</div>c
                </Flex>
            </Center>
        </ChakraProvider>
    )
}