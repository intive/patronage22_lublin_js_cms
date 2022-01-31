import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './store/auth-context';
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';
import App from './App';

ReactDOM.render(
  <AuthContextProvider>
  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);
