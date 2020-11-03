import React, { useState } from "react";
import CoreShell from "@/components/CoreShell";
import FullSpinner from '@/components/FullSpinner';
// import ColorModeToggle from '@/components/ColorModeToggle';

import Head from 'next/head';

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router"
import useUser from "@/utils/hooks/useUser";
// import useSWR from 'swr';
// import fetcher from '@/utils/fetcher';
import { apifetch, apipost } from '@/utils/fetch';



import {
  Box,
  Center,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Textarea,
  useToast
} from '@chakra-ui/core';
import NextLink from 'next/link';


import { useForm } from 'react-hook-form';


const Settings = () => {

    const { user } = useAuth();
    const router = useRouter();
    const { username } = router.query;
    // const { data: id, error } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher)
    // const { data } = useSWR(() => `${apifetch}/${id.user_id}/profile`, fetcher)
    const { user: data, isLoading, isError, mutate } = useUser(user);
    const { handleSubmit, register, errors } = useForm();
    const [ loading, setLoading ] = useState(false);

    const toast = useToast();

    if(isLoading) {
        return <FullSpinner />
    }
    
    if(isError) {
      return <h1>There was an error {error.message}</h1>
    }

    const onSubmit = async (creds) => {;
        setLoading(true);
        return apipost
          .patch(`/${user.user_id}/profile`, creds, {
              headers: {
                  Authorization: `Bearer ${user.token}`
              }
          })
          .then(() => {
            mutate(`${apifetch}/${user.user_id}/profile`);
            setLoading(false);
            toast({
              title: 'Complete!',
              description: "Your settings have been updated",
              status: 'success',
              duration: 5000,
              isClosable: true
            });
          })
          .catch((err) => {
            setLoading(false);
            toast({
              title: 'Hm, there was an error',
              description: err.message,
              status: 'error',
              duration: 5000,
              isClosable: true
            });
          });
    }

    return user && user.username === username ? (
      <>
        <Head>
          <title>Your Account // Paprback</title>
        </Head>
        <CoreShell>
          <Heading mb={5} textAlign="center">
            Settings
          </Heading>
          <Center>
            <Stack
              bg="whiteAlpha.900"
              color="gray.900"
              as="form"
              borderRadius={[0, 8]}
              errors={errors}
              maxWidth="600px"
              onSubmit={handleSubmit((data) => onSubmit(data))}
              px={8}
              py={12}
              shadow={[null, 'md']}
              spacing={4}
              w="100%"
            >
              <FormControl
                isInvalid={errors.first_name && errors.first_name.message}
              >
                <FormLabel>First Name</FormLabel>
                <Input
                  aria-label="first_name"
                  id="first_name"
                  name="first_name"
                  defaultValue={data.first_name}
                  ref={register({
                    required: 'Please enter your first name.'
                  })}
                  placeholder="Katniss"
                />
                <FormErrorMessage>
                  {errors.first_name && errors.first_name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.last_name && errors.last_name.message}
              >
                <FormLabel>Last Name</FormLabel>
                <Input
                  defaultValue={data.last_name}
                  aria-label="last_name"
                  name="last_name"
                  id="last_name"
                  ref={register({
                    required: 'Please enter your last name.'
                  })}
                />
                <FormErrorMessage>
                  {errors.last_name && errors.last_name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.bio && errors.bio.message}>
                <FormLabel>About</FormLabel>
                <Textarea
                  defaultValue={data.bio}
                  resize="none"
                  aria-label="bio"
                  name="bio"
                  id="bio"
                  minH="5rem"
                  ref={register({
                    maxlength: 250
                  })}
                />
                <FormErrorMessage>
                  {errors.bio && errors.bio.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.location && errors.location.message}
              >
                <FormLabel>Location</FormLabel>
                <Input
                  defaultValue={data.location}
                  aria-label="location"
                  name="location"
                  id="location"
                  ref={register({
                    maxlength: 250
                  })}
                />
                <FormErrorMessage>
                  {errors.location && errors.location.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                id="login"
                type="submit"
                backgroundColor="gray.900"
                color="whiteAlpha.900"
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
                Save
              </Button>
            </Stack>
          </Center>
          {/* <ColorModeToggle /> */}
        </CoreShell>
      </>
    ) : (
      'Not ur page'
    );
}

export default Settings;