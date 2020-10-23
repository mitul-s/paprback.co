import Head from 'next/head'
import CoreShell from '@/components/CoreShell';
import Dashboard from '@/components/Dashboard.js/Dashboard';
import Featured from '@/components/Dashboard.js/Featured';
import { Heading, Box, Text } from "@chakra-ui/core";

const Home = () => {

  return (
    <>
      <Head>
        <title>Dashboard | Paprback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CoreShell>
        <Box mb={8}>
          <Heading mb={3}>Welcome Back, Alyx 👋</Heading>
          <Text>Here's what you need to know.</Text>
        </Box>
        <Dashboard />
        <Featured />
      </CoreShell>
    </>
  );
}

export default Home;