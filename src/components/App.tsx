import {Center, ChakraProvider, Flex, useMediaQuery} from "@chakra-ui/react";
import {Header} from "./header";
import {Scene} from "./Scene";
import Hello from "./Hello";
import {Skills} from "./skills";
import {Works} from "./Works";
import {Footer} from "./Footer";
import React from "react";
import {Technologies} from "./technologies";

export const App = () => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    const fr = isLargerThan1280 ? 5 : 3

    return (
        <ChakraProvider resetCSS>
            <Center>
                <Flex direction='column' width={isLargerThan1280 ? '50%' : '90%'}>
                    <Header/>
                    <Scene/>
                    <Hello/>
                    <Technologies fr={fr}/>
                    <Works/>
                    <Skills/>
                    <Footer/>
                </Flex>
            </Center>
        </ChakraProvider>
    )
}