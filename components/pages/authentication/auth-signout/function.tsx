'use client';

import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

type Language = "en" | "yo";

const SignOut = () => {
  const [language] = React.useState<Language>("en");

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const linkColor = useColorModeValue('#ebb207ff', '#f2c94cff');

  const translations = {
    en: {
      title: "Sign Out",
      message: "Are you sure you want to sign out?",
      signOut: "Sign Out",
      cancel: "Cancel",
      backToDashboard: "Back to Homepage",
    },
    yo: {
      title: "Wọlé Kúrò",
      message: "Ṣé o dájú pé o fé wọlé kúrò?",
      signOut: "Wọlé Kúrò",
      cancel: "Fidí",
      backToDashboard: "Padà sí Ìlànà",
    },
  };

  const translate = (key: keyof typeof translations["en"]) => {
    return translations[language][key];
  };

  return (
    <VStack h="100%" justify="center">
      <Box w={['100%', '30.25rem']} p="2rem" bg={bgColor} borderRadius="md" boxShadow="lg">
        <VStack gap="1.5rem" justify="center" h="100%">
          <Heading as="h1" size="lg" textAlign="center" fontSize="20px" color={textColor}>
            {translate("title")}
          </Heading>
          <Text textAlign="center" fontSize="md" color={textColor}>
            {translate("message")}
          </Text>
          <Button
            bg={linkColor}
            color="white"
            _hover={{ bg: linkColor }}
            w="100%"
            mt={3}
            py="1.5rem"
            onClick={() => signOut({ callbackUrl: '/' })} 
          >
            {translate("signOut")}
          </Button>
          <Button
            variant="outline"
            color={textColor}
            _hover={{ bg: "gray.200", color: "black" }}
            w="100%"
            py="1.5rem"
            onClick={() => window.history.back()}
          >
            {translate("cancel")}
          </Button>
          <Link href="/" style={{ textDecoration: 'underline', color: linkColor }}>
            {translate("backToDashboard")}
          </Link>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignOut;
