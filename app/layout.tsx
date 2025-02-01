'use client';

import './globals.css';
import ChakraUIProvider from '@/components/chakra-provider/function';
import { LanguageProvider } from '@/lingual-context/LanguageContext';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 text-black dark:text-white">
          <SessionProvider>
          <LanguageProvider>
            <ChakraUIProvider>
              {children}
            </ChakraUIProvider>
          </LanguageProvider>
          </SessionProvider>
       
      </body>
    </html>
  );
}
