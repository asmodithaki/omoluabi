"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Heading,
  Flex,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
  Checkbox,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { signIn, signOut } from "@/auth";  // Import from the local auth module

type Language = "en" | "yo";

const SignIn = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [formData, setFormData] = useState({ email: "", password: "" });

  // UI variables
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const borderColor = useColorModeValue("lightgrey", "gray.600");
  const linkColor = useColorModeValue("#6e30b0", "#9c6dde");
  const buttonColor = useColorModeValue("#ebb207ff", "#f2c94cff");

  // Translations
  const translations = {
    en: {
      title: "Sign in to your Omoluabi Account",
      continueWith: "Or continue with",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      rememberMe: "Remember Me",
      forgottenPassword: "Forgotten Password",
      signIn: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Get one here",
    },
    yo: {
      title: "Wọlé sí àkàǹlẹ̀ Omoluabi rẹ",
      continueWith: "Tàbí tẹsiwaju pẹ̀lú",
      emailLabel: "Àdírẹ́sì Ìméèlì",
      passwordLabel: "Ọ̀rọ̀ aṣínà",
      rememberMe: "Rántí Mi",
      forgottenPassword: "Ọrọ̀ aṣínà tí a gbàgbé",
      signIn: "Wọlé",
      noAccount: "Kò ní àkàǹlè?",
      signUp: "Ṣe àkàǹlè nibi",
    },
  };

  const translate = (key: keyof typeof translations["en"]) => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "yo" : "en"));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Using signIn with correct options
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        // We don't need `redirect: true` here, the redirect should be handled by NextAuth automatically
      });
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
    <VStack h="100%" justify="center">
      <Box w={["100%", "30.25rem"]} p="2rem" bg={bgColor} borderRadius="md" boxShadow="lg">
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
              _hover={{ bg: buttonColor, color: "white" }}
            >
              {language === "en" ? "Switch to Yoruba" : "Switch to English"}
            </Button>
          </Flex>
          <Flex justify="center" w="100%" gap="2rem" mt="1rem">
            <Button
              bg="#4285F4"
              color="white"
              _hover={{ bg: "#357AE8" }}
              py="0.867rem"
              px="2rem"
              borderRadius={5}
              w="140px"
              onClick={() => signIn("google" )}
            >
              <FaGoogle size="1.5rem" />
            </Button>
            <Button
              bg="#1DA1F2"
              color="white"
              _hover={{ bg: "#1A91DA" }}
              py="0.867rem"
              px="2rem"
              borderRadius={5}
              w="140px"
              onClick={() => signIn("twitter")}
            >
              <FaTwitter size="1.5rem" />
            </Button>
          </Flex>
          <Text textAlign="center" fontSize="1.15rem" color={textColor}>
            {translate("continueWith")}
          </Text>
          <VStack as="form" onSubmit={handleSignIn} w="100%" gap="1rem">
            <FormControl id="email" w="100%">
              <FormLabel fontSize="14px" color={textColor}>
                {translate("emailLabel")}
              </FormLabel>
              <Input
                type="email"
                placeholder={translate("emailLabel")}
                name="email"
                onChange={handleInputChange}
                _focus={{ borderColor: buttonColor }}
                border={`1px solid ${borderColor}`}
                py="1.5rem"
                px="1rem"
              />
            </FormControl>
            <FormControl id="password" w="100%">
              <FormLabel fontSize="14px" color={textColor}>
                {translate("passwordLabel")}
              </FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  placeholder={translate("passwordLabel")}
                  name="password"
                  onChange={handleInputChange}
                  _focus={{ borderColor: buttonColor }}
                  border={`1px solid ${borderColor}`}
                  py="1.5rem"
                  px="1rem"
                />
                <InputRightElement />
              </InputGroup>
            </FormControl>
            <Flex justify="space-between" alignItems="center" mt={3} w="100%" fontSize="12px" color={textColor}>
              <Checkbox colorScheme="orange" size="sm">
                {translate("rememberMe")}
              </Checkbox>
              <Link href="/forgot-password" textDecoration="underline" color={linkColor}>
                {translate("forgottenPassword")}
              </Link>
            </Flex>
            <Button bg={buttonColor} color="white" _hover={{ bg: buttonColor }} type="submit" mt={3} w="100%" py="1.5rem">
              {translate("signIn")}
            </Button>
          </VStack>
          <Text textAlign="center" w="100%" fontSize="12px" color={textColor}>
            {translate("noAccount")}{" "}
            <Link href="/signup" textDecoration="underline" color={linkColor}>
              {translate("signUp")}
            </Link>
          </Text>
          {/* Sign out button */}
          <Button variant="ghost" onClick={handleSignOut} w="full" mt={4}>
            Sign Out
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignIn;
