import Head from 'next/head'
import CoreShell from '@/components/CoreShell';
import Dashboard from '@/components/Dashboard/Dashboard';
import GuestDash from '@/components/Dashboard/GuestDash';
import Featured from '@/components/Dashboard/Featured';
import { Heading, Box, Text } from "@chakra-ui/core";


import { useAuth } from "@/lib/auth"
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

const Home = () => {

  const { user } = useAuth();
  const { data: id, error } = useSWR(user ? `${apifetch}/user/${user.username}` : null, fetcher)
  const { data } = useSWR(() => `${apifetch}/${id.user_id}/profile`, fetcher)

  return user && data ? (
    <CoreShell>
      <Box mb={8}>
        <Heading mb={3}>Welcome Back, {data.first_name} 👋</Heading>
        <Text>Here's what you need to know.</Text>
      </Box>
      <Dashboard user={user} data={data} />
      <Featured/>
    </CoreShell>
  ) : (
    <CoreShell>
      <GuestDash />
      <Featured/>
    </CoreShell>
  );

  // if(!data) {
  //   return "Loading.."
  // }
  
  // let u = {};
  // let s = {};
  // if (data && shelves) {
  //   u = {
  //     firstName: data.first_name,
  //     lastName: data.last_name,
  //     bio: data.bio
  //   };

  //   s = {
  //     cr: shelves.currently_reading,
  //     rl: shelves.want_to_read,
  //     pr: shelves.previously_read
  //   };
  // }

  // return (
  //   <>
  //     <Head>
  //       <title>Dashboard | Paprback</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <CoreShell>
  //       <Box mb={8}>
  //         <Heading mb={3}>Welcome Back, alyx 👋</Heading>
  //         <Text>Here's what you need to know.</Text>
  //       </Box>
  //       {/* <Dashboard shelf={s} />
  //       <Featured /> */}
  //     </CoreShell>
  //   </>
  // );
}

export default Home;