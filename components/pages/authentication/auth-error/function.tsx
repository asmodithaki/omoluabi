"use client"
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
import { useSearchParams } from 'next/navigation';

type Language = "en" | "yo";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [language, ] = React.useState<Language>("en");

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const linkColor = useColorModeValue('#ebb207ff', '#f2c94cff');

  const translations = {
    en: {
      title: "An Error Occurred",
      message: "Sorry, something went wrong during sign-in.",
      specific: {
        "Signin": "There was an error signing you in.",
        "OAuthSignin": "There was an error with the OAuth sign-in process.",
        "OAuthCallback": "There was an error during the OAuth callback.",
        "OAuthCreateAccount": "We couldn't create your account for some reason.",
        "EmailCreateAccount": "We couldn't create your account with this email.",
        "Callback": "Callback error.",
        "OAuthAccountNotLinked": "The account associated with this email isn't linked to a provider.",
        "EmailSignin": "Email sign-in error.",
        "CredentialsSignin": "The credentials provided are incorrect.",
        "default": "An unexpected error occurred. Please try again later."
      },
      returnToSignIn: "Return to Sign In",
    },
    yo: {
      title: "Àṣìṣe ti ṣẹlẹ",
      message: "Dúró, nǹkan kan ti ṣe àṣìṣe ni àsìkò wọlé.",
      specific: {
        "Signin": "Àṣìṣe kan ti ṣẹlẹ nigbati a fé wọlé.",
        "OAuthSignin": "Àṣìṣe kan ti ṣẹlẹ pẹ̀lú ilana wọlé OAuth.",
        "OAuthCallback": "Àṣìṣe kan ti ṣẹlẹ ni àsìkò ipele OAuth.",
        "OAuthCreateAccount": "A kò le ṣẹda àkàǹlẹ̀ rẹ fún ìdí kan.",
        "EmailCreateAccount": "A kò le ṣẹda àkàǹlẹ̀ rẹ pẹ̀lú iméèlì yii.",
        "Callback": "Àṣìṣe ipele.",
        "OAuthAccountNotLinked": "Àkàǹlẹ̀ tí ó jọmọ iméèlì yii kò jọ orísun kan.",
        "EmailSignin": "Àṣìṣe wọlé iméèlì.",
        "CredentialsSignin": "Àwọn àlàyé tí ó pèsè kò tọ.",
        "default": "Àṣìṣe àìrètí kan ti ṣẹlẹ. Jọwọ́ gbiyanju lẹ́ẹ̀kànsí nigbamii."
      },
      returnToSignIn: "Padà sí Wọlé",
    },
  };

  const translate = (key: keyof typeof translations["en"]) => {
    return translations[language][key] as string; // Ensure we're returning a string
  };

  const translateSpecific = (key: string) => {
    const specific = translations[language].specific;
    return (specific[key as keyof typeof specific] || specific.default) as string;  // Cast to string
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
          <Text textAlign="center" fontSize="sm" color={textColor}>
            {error ? translateSpecific(error) : translateSpecific("default")}
          </Text>
          <Link href="/signin" style={{ textDecoration: 'none', width: '100%' }}>
            <Button
              bg={linkColor}
              color="white"
              _hover={{ bg: linkColor }}
              w="100%"
              mt={3}
              py="1.5rem"
            >
              {translate("returnToSignIn")}
            </Button>
          </Link>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ErrorPage;