'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export default function ChakraUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
