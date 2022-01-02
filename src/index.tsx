import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ChakraProvider} from "@chakra-ui/react";
import {Scene} from "./components/scene";
import {Header} from "./components/header";


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider resetCSS>
          <Header />
          <Scene />
          <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
