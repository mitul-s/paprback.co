import React, { useState } from 'react';
import { useAuth } from '@/lib/auth.js';
import CoreShell from '@/components/CoreShell';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Icon,
  Link,
  useToast
} from '@chakra-ui/core';

import { useForm } from 'react-hook-form';

const Signup = () => {
  const toast = useToast();
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const onSignup = (creds) => {
    console.log(creds);
    setLoading(true);
    signup(creds).catch((error) => {
      setLoading(false);
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    });
  };

  return (
    <CoreShell align="center" justify="center" h="60vh">
      <Stack
        as="form"
        backgroundColor="white"
        borderRadius={[0, 8]}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit((data) => onSignup(data))}
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
        <FormControl isInvalid={errors.email && errors.email.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            aria-label="emailAddress"
            id="emailAddress"
            name="email"
            ref={register({
              required: 'Please enter your email address.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address!'
              }
            })}
            placeholder="harrypotter@gmail.com"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.username && errors.username.message}>
          <FormLabel>Username</FormLabel>
          <Input
            aria-label="username"
            id="username"
            name="username"
            ref={register({
              required: 'Please enter your username.',
              minLength: 8,
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: 'Username can only include letters and numbers.'
              }
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
      <NextLink href="/signin">
        <Link mt={10}>Already have an account? Sign in here</Link>
      </NextLink>
    </CoreShell>
  );
};

export default Signup;
