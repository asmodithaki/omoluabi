import { Box, Checkbox, Link, Button } from '@chakra-ui/react';
import {
  VStack,
  Heading,
  Flex,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <VStack h={'100%'} justify={'center'}>
      <Box w={['100%', '30.25rem']} p={'2rem'} bg="white">
        <VStack gap={'1.5rem'} justify={'center'} h="100%">
          <Heading as="h1" size="lg" textAlign="center" fontSize="20px">
            Sign in to your Omoluabi Account
          </Heading>
          <Flex justify={'center'} w={'100%'} gap={'2rem'} marginTop={'1rem'}>
            <Flex
              justify="center"
              border="1px solid #ebb207ff "
              py="0.867rem"
              px={'2rem'}
              borderRadius={5}
              //   justifyContent={'space-between'}
              w={'140px'}
            >
              <Image
                src={'/google.png'}
                alt="google image"
                width={25}
                height={10}
              />
              <Text ml={2}>Google</Text>
            </Flex>
            <Flex
              justify="center"
              border="1px solid #ebb207ff "
              py="0.867rem"
              px={'2rem'}
              borderRadius={5}
              //   justifyContent={'space-between'}
              w={'140px'}
            >
              <Image
                src={'/twitter.svg'}
                alt="twitter image"
                width={25}
                height={10}
              />
              <Text ml={2}>Twitter</Text>
            </Flex>
          </Flex>
          <Text textAlign={'center'} fontSize={'1.15rem'}>
            Or continue with
          </Text>
          <VStack as={'form'} w="100%" gap="1rem">
            <FormControl id="email" w="100%">
              <FormLabel w="100%" fontSize="14px">
                Email Address
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your Email Address"
                _focus={{ borderColor: '#ebb207ff' }}
                border={'1px solid lightgrey'}
                focusBorderColor="transparent"
                name="email"
                py="1.5rem"
                px="1rem"
                w="100%"
                sx={{
                  '::placeholder': {
                    fontSize: '14px',
                    color: '#a89f98',
                  },
                }}
              />
              <Text color="red.500" style={{ fontSize: '10px' }}></Text>
            </FormControl>

            <FormControl id="password">
              <FormLabel fontSize="14px">Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Enter password"
                  _focus={{ borderColor: '#ebb207ff' }}
                  border={'1px solid lightgrey'}
                  focusBorderColor="transparent"
                  name="password"
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: '#a89f98',
                    },
                  }}
                />
                <InputRightElement></InputRightElement>
              </InputGroup>
              <Text color="red.500" style={{ fontSize: '10px' }}></Text>
            </FormControl>

            <Flex
              justify="space-between"
              alignItems="center"
              mt={3}
              w="100%"
              fontSize="12px"
              color="#544f4c"
            >
              <Checkbox colorScheme="orange" defaultChecked size="sm">
                Remember Me
              </Checkbox>

              <Link
                href="/signup"
                style={{ textDecoration: 'underline', color: '#6e30b0' }}
              >
                Forgotten Password
              </Link>
            </Flex>

            <Button
              bg="#ebb207ff"
              color="white"
              _hover={{ bg: '#ebb207ff' }}
              type="submit"
              mt={3}
              w="100%"
              py="1.5rem"
            >
              Create Account
            </Button>
          </VStack>
          <Text textAlign="center" w="100%" fontSize="12px">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              style={{ textDecoration: 'underline', color: '#6e30b0' }}
            >
              Get one here
            </Link>
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default page;
