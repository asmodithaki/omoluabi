'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  FormLabel,
  FormControl,
  Checkbox,
  VStack,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

type Language = "en" | "yo";

const SignUp = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if terms are agreed before proceeding
    if (!termsAgreed) {
      alert(translate("terms") + " " + translate("termsLink") + " must be accepted.");
      return;
    }

    try {
      // Here you would typically make an API call to your server to create a new user
      // Since this is client-side code, we can't directly interact with the database,
      // but we can simulate how this would work with an API endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          whatsapp,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // User was successfully created, redirect to login or show success message
        alert('Account created successfully. Please sign in.');
        // Optionally redirect to the sign-in page
        window.location.href = '/signin';
      } else {
        // Handle errors from the server
        alert(data.error || 'An error occurred during registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const linkColor = useColorModeValue('#ebb207ff', '#f2c94cff');

  const translations = {
    en: {
      title: "Create an Omoluabi Account",
      continueWith: "Or continue with",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      whatsapp: "Whatsapp Number",
      password: "Password",
      terms: "I agree with the",
      termsLink: "Terms & Conditions",
      createAccount: "Create Account",
      alreadyHaveAccount: "Already have an account?",
      signIn: "Sign in here",
    },
    yo: {
      title: "Ṣe àkàǹlẹ̀ Omoluabi",
      continueWith: "Tàbí tẹsiwaju pẹ̀lú",
      firstName: "Orúkọ Àkọ́kọ́",
      lastName: "Orúkọ Ìdílé",
      email: "Àdírẹ́sì Ìméèlì",
      whatsapp: "Nọ́mbà Whatsapp",
      password: "Ọ̀rọ̀ aṣínà",
      terms: "Mo gbà pẹ̀lú",
      termsLink: "Àwọn Ìlànà & Ìpinnu",
      createAccount: "Ṣe àkàǹlẹ̀",
      alreadyHaveAccount: "Ṣé o ní àkàǹlẹ̀ tẹ́lẹ̀?",
      signIn: "Wọlé nibi",
    },
  };

  const translate = (key: keyof typeof translations["en"]) => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "yo" : "en"));
  };

  return (
    <VStack h="100%" justify="center">
      <Box w={['100%', '30.25rem']} p="2rem" bg={bgColor} borderRadius="md" boxShadow="lg">
        <VStack gap="1.5rem" justify="center" h="100%">
          <Flex justify="space-between" w="100%">
            <Heading as="h1" size="lg" textAlign="center" fontSize="20px" color={textColor}>
              {translate("title")}
            </Heading>
            <Button
              onClick={toggleLanguage}
              size="sm"
              variant="outline"
              color={textColor}
              _hover={{ bg: linkColor, color: "white" }}
            >
              {language === "en" ? "Switch to Yoruba" : "Switch to English"}
            </Button>
          </Flex>
          <Flex justify="center" w="100%" gap="2rem" mt="1rem">
            {/* Google Button */}
            <Button
              onClick={() => signIn('google')}
              bg="#4285F4" // Official Google Blue
              color="white"
              _hover={{ bg: '#357AE8' }} // Slightly darker blue for hover
              py="0.867rem"
              px="2rem"
              borderRadius="5px"
              w="140px"
            >
              <FaGoogle size="1.5rem" />
            </Button>
            {/* Twitter Button */}
            <Button
              onClick={() => signIn('twitter')}
              bg="#1DA1F2" // Official Twitter Blue
              color="white"
              _hover={{ bg: '#1A91DA' }} // Slightly darker blue for hover
              py="0.867rem"
              px="2rem"
              borderRadius="5px"
              w="140px"
            >
              <FaTwitter size="1.5rem" />
            </Button>
          </Flex>
          <Text textAlign="center" fontSize="1.15rem" color={textColor}>
            {translate("continueWith")}
          </Text>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack w="100%" gap="1rem">
              {[
                { key: "firstName", state: firstName, setState: setFirstName },
                { key: "lastName", state: lastName, setState: setLastName },
                { key: "email", state: email, setState: setEmail },
                { key: "whatsapp", state: whatsapp, setState: setWhatsapp },
              ].map(({ key, state, setState }) => (
                <FormControl key={key} isRequired>
                  <FormLabel fontSize="14px" color={textColor}>
                    {translate(key as keyof typeof translations["en"])}
                  </FormLabel>
                  <Input
                    type={key === "whatsapp" ? 'number' : 'text'}
                    placeholder={`Enter your ${translate(key as keyof typeof translations["en"])}`}
                    focusBorderColor={linkColor}
                    borderColor={borderColor}
                    py="1.5rem"
                    px="1rem"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    _placeholder={{ fontSize: '14px', color: 'gray.500' }}
                  />
                </FormControl>
              ))}
              <FormControl isRequired>
                <FormLabel fontSize="14px" color={textColor}>
                  {translate("password")}
                </FormLabel>
                <InputGroup>
                  <Input
                    type="password"
                    placeholder={`Enter ${translate("password")}`}
                    focusBorderColor={linkColor}
                    borderColor={borderColor}
                    py="1.5rem"
                    px="1rem"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    _placeholder={{ fontSize: '14px', color: 'gray.500' }}
                  />
                  <InputRightElement />
                </InputGroup>
              </FormControl>
              <Flex alignItems="center" mt={3} w="100%" gap={2} fontSize="12px">
                <Checkbox 
                  colorScheme="orange" 
                  isChecked={termsAgreed} 
                  onChange={(e) => setTermsAgreed(e.target.checked)} 
                  size="sm"
                >
                  {translate("terms")}
                </Checkbox>
                <Link href="/terms" style={{ textDecoration: 'underline', color: linkColor }}>
                  {translate("termsLink")}
                </Link>
              </Flex>
              <Button
                bg={linkColor}
                color="white"
                _hover={{ bg: linkColor }}
                type="submit"
                mt={3}
                w="100%"
                py="1.5rem"
              >
                {translate("createAccount")}
              </Button>
            </VStack>
          </form>
          <Text textAlign="center" w="100%" fontSize="12px" color={textColor}>
            {translate("alreadyHaveAccount")}{' '}
            <Link href="/signin" style={{ textDecoration: 'underline', color: linkColor }}>
              {translate("signIn")}
            </Link>
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignUp;