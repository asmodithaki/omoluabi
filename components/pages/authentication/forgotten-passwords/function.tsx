'use client';

import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Stack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

type Language = "en" | "yo";

const ForgotPassword = () => {
  const [resetMethod, setResetMethod] = useState<'email' | 'whatsapp'>('email');
  const [language, setLanguage] = useState<Language>("en");

  // Chakra UI styles
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const buttonColor = useColorModeValue('#ebb207ff', '#f2c94cff');
  const linkColor = useColorModeValue('#6e30b0', '#9c6dde');

  const translations = {
    en: {
      title: "Forgot Password?",
      resetMethod: "Choose a method to reset your password.",
      email: "Email Address",
      whatsapp: "WhatsApp Phone Number",
      emailBtn: "Email",
      whatsappBtn: "WhatsApp",
      sendEmail: "Send Reset Link",
      sendWhatsapp: "Send OTP",
      rememberPassword: "Remember your password?",
      signIn: "Sign in here",
    },
    yo: {
      title: "Ṣe dàbí Ọ̀rọ̀ aṣínà?",
      resetMethod: "Yan ọ̀nà láti tún ọ̀rọ̀ aṣínà padà.",
      email: "Àdírẹ́sì Ìméèlì",
      whatsapp: "Nọ́mbà WhatsApp",
      emailBtn: "Ìméèlì",
      whatsappBtn: "WhatsApp",
      sendEmail: "Fi Ìfọwọ́sí Àtúnṣe",
      sendWhatsapp: "Fi OTP",
      rememberPassword: "Ṣe o rántí ọ̀rọ̀ aṣínà?",
      signIn: "Wọlé nibi",
    },
  };

  const translate = (key: keyof typeof translations["en"]) => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "yo" : "en"));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (resetMethod === 'email') {
      // Logic for sending reset link via email
    } else if (resetMethod === 'whatsapp') {
      // Logic for sending OTP via WhatsApp API
    }
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
          <Text textAlign="center" fontSize="14px" color={textColor}>
            {translate("resetMethod")}
          </Text>
          <RadioGroup
            onChange={(nextValue) => setResetMethod(nextValue as 'email' | 'whatsapp')}
            value={resetMethod}
            w="100%"
          >
            <Stack direction="row" justify="center" spacing={8}>
              <Button
                size="lg"
                fontSize="16px"
                borderRadius="lg"
                p="1.5rem"
                bg={resetMethod === 'email' ? buttonColor : 'gray.300'}
                color="white"
                onClick={() => setResetMethod('email')}
              >
                {translate("emailBtn")}
              </Button>
              <Button
                size="lg"
                fontSize="16px"
                borderRadius="lg"
                p="1.5rem"
                bg={resetMethod === 'whatsapp' ? buttonColor : 'gray.300'}
                color="white"
                onClick={() => setResetMethod('whatsapp')}
              >
                {translate("whatsappBtn")}
              </Button>
            </Stack>
          </RadioGroup>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {resetMethod === 'email' && (
              <FormControl isRequired>
                <FormLabel fontSize="14px" color={textColor}>
                  {translate("email")}
                </FormLabel>
                <Input
                  type="email"
                  placeholder={`Enter your ${translate("email")}`}
                  focusBorderColor={buttonColor}
                  borderColor={borderColor}
                  py="1.5rem"
                  px="1rem"
                  _placeholder={{ fontSize: '14px', color: 'gray.500' }}
                />
              </FormControl>
            )}
            {resetMethod === 'whatsapp' && (
              <FormControl isRequired>
                <FormLabel fontSize="14px" color={textColor}>
                  {translate("whatsapp")}
                </FormLabel>
                <Input
                  type="tel"
                  placeholder={`Enter your ${translate("whatsapp")}`}
                  focusBorderColor={buttonColor}
                  borderColor={borderColor}
                  py="1.5rem"
                  px="1rem"
                  _placeholder={{ fontSize: '14px', color: 'gray.500' }}
                />
              </FormControl>
            )}
            <Button
              bg={buttonColor}
              color="white"
              _hover={{ bg: buttonColor }}
              type="submit"
              mt={4}
              w="100%"
              py="1.5rem"
            >
              {resetMethod === 'email' ? translate("sendEmail") : translate("sendWhatsapp")}
            </Button>
          </form>
          <Text textAlign="center" fontSize="12px" color={textColor}>
            {translate("rememberPassword")}{' '}
            <Link href="/signin" style={{ textDecoration: 'underline', color: linkColor }}>
              {translate("signIn")}
            </Link>
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ForgotPassword;