import { Box, Heading, Image, Spinner, Text, useToast } from "@chakra-ui/react";
import FullSpinner from "@/components/FullSpinner";
import AuthProfile from "@/components/Profile/Auth/Profile"
import GuestProfile from '@/components/Profile/Guest/Profile';

import Head from 'next/head';


import { useAuth } from '@/lib/auth'
import { useRouter } from "next/router";
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';



const User = () => {
    
    const { user } = useAuth();
    const router = useRouter();
    let { username } = router.query;
    const { data: id, error } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher, {
      revalidateOnFocus: false,
    })
    const { data } = useSWR(() => `${apifetch}/${id.user_id}/profile`, fetcher)
    

    const toast = useToast();
    if(error) {
      toast({
        title: "User not found!",
        status: "error",
        duration: 3000,
        isClosable: "true"
      })
      setTimeout(() => {
        router.push('/');
      }, 1000)
    }

    if(!data) return <FullSpinner />

    return (
      <>
        <Head>
          <title>@{username} // Paprback</title>
        </Head>
        {user && user.username === username ? (
          <AuthProfile id={id} u={data} username={username} auth={true} />
        ) : (
          <GuestProfile id={id} u={data} username={username} />
        )}
      </>
    );

}






export default User;