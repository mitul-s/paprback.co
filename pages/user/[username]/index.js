import { Box, Heading, Image, Spinner, Text, useToast } from "@chakra-ui/core";
import CoreShell from '@/components/CoreShell';
import Shelves from '@/components/Profile/Shelves';
import FullSpinner from "@/components/FullSpinner";

import Head from 'next/head';


import { useRouter } from "next/router";
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';
import { useAuth } from '@/lib/auth';



const User = () => {
    const { user } = useAuth();
    const router = useRouter();
    const { username } = router.query;
    const { data: id, error } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher)
    const { data } = useSWR(() => `${apifetch}/${id.user_id}/profile`, fetcher)
    const { data: shelves } = useSWR(() => `${apifetch}/${id.user_id}/shelves`, fetcher)

    const toast = useToast();
    if(error) {
      toast({
        title: "User not found!",
        status: "error",
        duration: 5000,
        isClosable: "true"
      })
      setTimeout(() => {
        router.push('/');
      }, 1000)
    }

    if(!data) return <FullSpinner />

    let u = {}
    let s = {}
    if(data && shelves) {
      u = {
        firstName: data.first_name,
        lastName: data.last_name,
        bio: data.bio,
      }

      s = {
        cr: shelves.currently_reading,
        rl: shelves.want_to_read,
        pr: shelves.previously_read,
      }
    }

    return (
      <>
      <Head>
        <title>@{user.username} // Paprback</title>
      </Head>
        <CoreShell>
          <Box
            bg="white"
            minH="20vh"
            p={5}
            display="flex"
            justifyContent="center"
            placeItems="center"
          >
            <Box textAlign="center">
              <Box mb={3}>
                <Image
                  rounded="100%"
                  border="3px solid"
                  borderColor="teal.500"
                  fallbackSrc="https://via.placeholder.com/150x150"
                />
              </Box>
              <Heading fontSize="lg">
                {u.firstName} {u.lastName}
              </Heading>
              <Heading fontSize="md" fontWeight="normal">
                {username}
              </Heading>
              <Text>{u.bio}</Text>
            </Box>
          </Box>
          <Shelves title="Currently" subheading="Books you're reading at the moment" shelf={s.cr} shelfType="cr"/>
          <Shelves title="Up Next" subheading="Here's what's on your reading list" shelf={s.rl}  shelfType="rl" />
          <Shelves title="Previously" subheading="Books you've read before" shelf={s.pr} portrait={true} />
        </CoreShell>
      </>
    );
}






export default User;