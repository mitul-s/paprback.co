import React, { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Box, Flex, Icon, Link, Stack, Heading, Text, FormControl, FormLabel, Input, FormErrorMessage, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/core";
import { useForm } from 'react-hook-form';
import NextLink from "next/link"

const AuthContent = ({ register, errors, type, loading, ...rest }) => {
    return (
      <>
        <Stack {...rest}>
          <Flex justify="center">
            <Box as="a" href="/" aria-label="Back to homepage" textAlign="center">
                <Heading fontSize="lg">Paprback</Heading>
                <Text>Sign up for an account</Text>
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
              placeholder="katniss@gmail.com"
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
            id="register"
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
            {type}
          </Button>
          <NextLink href="/signin">
            <Link mt={10}>Already have an account? Sign in here</Link>
          </NextLink>
        </Stack>
      </>
    );
}

const AuthModal = ({ isOpen, onClose, loading, type, onSubmit }) => {

    const { handleSubmit, register, errors } = useForm();

    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px={8} py={12}>
            <AuthContent
              as="form"
              errors={errors}
              onSubmit={handleSubmit((data) => onSubmit(data))}
              register={register}
              type={type}
              loading={loading}
              w="100%"
              spacing={6}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    );

}

export const withAuthModal = (Component) => (props) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);


    const onSignup = (creds) => {
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
        <>
            <AuthModal isOpen={isOpen} onClose={onClose} type="Sign Up" loading={loading} onSubmit={onSignup} />
            <Component openAuthModal={onOpen} {...props} />
        </>
    )
}