import { Box, Heading, Image, Spinner, Text, useToast } from "@chakra-ui/core";
import FullSpinner from "@/components/FullSpinner";

import AuthProfile from "@/components/Profile/views/AuthProfile";
import GuestProfile from '@/components/Profile/views/GuestProfile';

import Head from 'next/head';


import { useAuth } from '@/lib/auth'
import { useRouter } from "next/router";
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';


import useShelf from "@/utils/hooks/useShelf"


const User = () => {
    
    const { user } = useAuth();
    const router = useRouter();
    let { username } = router.query;
    const { data: id, error } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher, {
      revalidateOnFocus: false,
    })
    const { data } = useSWR(() => `${apifetch}/${id.user_id}/profile`, fetcher)
    const { shelf: shelves } = useShelf(id);
    

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
          <title>@{username} // Paprback</title>
        </Head>
        {user && user.username === username ? (
          <AuthProfile u={u} s={s} username={username} />
        ) : (
          <GuestProfile u={u} s={s} username={username} />
        )}
      </>
    );

}






export default User;