import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Center, ChakraProvider, Flex, Stack} from "@chakra-ui/react";
import {Scene} from "./components/scene";
import {Header} from "./components/header";
import {Footer} from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider resetCSS>
            <Center>
            <Flex direction='column'>
                    <Header/>
                    <Scene/>
                    <App/>
                    <Footer/>
                </Flex>
            </Center>

        </ChakraProvider>
    </React.StrictMode>
,
document.getElementById('root')
);
