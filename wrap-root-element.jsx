import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

const RootElementWrapper = ({ children }) => (
  <ChakraProvider resetCSS>{children}</ChakraProvider>
);

export default RootElementWrapper;
