import React, { useState, useContext } from "react";
import { useAuth } from "@/lib/auth.js"
import CoreShell from '@/components/CoreShell';
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Icon,
  useToast
} from '@chakra-ui/core';


import { useForm } from "react-hook-form";

const Signin = () => {

  const toast = useToast();
  const { handleSubmit, register, errors } = useForm();
  const [ loading, setLoading  ] = useState(false);
  const { login } = useAuth();

  const onLogin = (creds) => {
    console.log(creds)
    setLoading(true)
    login(creds).catch((error) => {
      setLoading(false);
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    })
  }
  
  return (
    <CoreShell align="center" justify="center" h="60vh">
      <Stack
        as="form"
        backgroundColor="white"
        borderRadius={[0, 8]}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit((data) => onLogin(data))}
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Box as="a" href="/" aria-label="Back to homepage">
            <Icon color="black" name="logo" size="64px" mb={4} />
          </Box>
        </Flex>
        <FormControl isInvalid={errors.username && errors.username.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            autoFocus
            aria-label="username"
            id="username"
            name="username"
            ref={register({
              required: 'Please enter your username.'
            })}
            placeholder="katnisseverdeen"
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password && errors.password.message}>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="password"
            id="password"
            type="password"
            ref={register({
              required: 'Please enter a password.'
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          id="login"
          type="submit"
          backgroundColor="gray.900"
          color="white"
          isLoading={loading}
          fontWeight="medium"
          mt={4}
          h="50px"
          fontSize="lg"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Login
        </Button>
      </Stack>
    </CoreShell>
  );


  // return (
  //   <CoreShell h="60vh" alignItems="center" justifyContent="center">
  //     <Box bg="white" p={10} w="50%">
  //       <Heading mb={5} fontSize="2xl">Welcome back!</Heading>
  //       <Box w="full" as="form">
  //         <FormControl mb={3}>
  //           <FormLabel htmlFor="email">Email address</FormLabel>
  //           <Input
  //             type="email"
  //             id="email"
  //             aria-describedby="email-helper-text"
  //           />
  //           <FormHelperText id="email-helper-text">
  //             We'll never share your email.
  //           </FormHelperText>
  //         </FormControl>
  //         <InputGroup>
  //           <Input placeholder="helo" />
  //         </InputGroup>
  //         <Button mt={4}>Log in</Button>
  //       </Box>
  //       <Box mt={3}>
  //         <NextLink href="/signup" passHref>
  //           <Link fontSize="xs">Don't have an account? Sign up here</Link>
  //         </NextLink>
  //       </Box>
  //     </Box>
  //   </CoreShell>
  // );
};

export default Signin;
