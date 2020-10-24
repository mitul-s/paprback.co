import Head from 'next/head'
import CoreShell from '@/components/CoreShell';
import Dashboard from '@/components/Dashboard/Dashboard';
import GuestDash from '@/components/Dashboard/GuestDash';
import Featured from '@/components/Dashboard/Featured';
// import FullSpinner from '@/components/FullSpinner';
// import { Heading, Box, Text } from "@chakra-ui/core";


import { useAuth } from "@/lib/auth"
// import useUser from "@/utils/hooks/useUser";
// import { useRouter } from 'next/router';
// import useSWR from 'swr';
// import fetcher from '@/utils/fetcher';
// import { apifetch } from '@/utils/fetch';


const Home = () => {

  const { user } = useAuth();

  return user ? (
    <>
      <Head>
        <title>Dashboard // Paprback</title>
      </Head>
      <CoreShell>
        <Dashboard user={user} />
        <Featured />
      </CoreShell>
    </>
  ) : (
    <>
      <Head>
        <title>Home // Paprback</title>
      </Head>
      <CoreShell>
        <GuestDash />
        <Featured />
      </CoreShell>
    </>
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