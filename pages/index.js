import Head from 'next/head'
import CoreShell from '@/components/CoreShell';
import Dashboard from '@/components/Dashboard/Dashboard';
import GuestDash from '@/components/Dashboard/GuestDash';
import Featured from '@/components/Dashboard/Featured';
// import { Heading, Box, Text } from "@chakra-ui/core";


import { useAuth } from "@/lib/auth"
// import FullSpinner from '@/components/FullSpinner';
// import useUser from "@/utils/hooks/useUser";
// import { useRouter } from 'next/router';
// import useSWR from 'swr';
// import fetcher from '@/utils/fetcher';
// import { apifetch } from '@/utils/fetch';


const Home = () => {

  const { user, loading } = useAuth();
  
  if(loading) {
    return <CoreShell/>
  }

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
}

export default Home;