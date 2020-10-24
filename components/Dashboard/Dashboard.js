import { Box, Heading, Text, Link, SimpleGrid } from "@chakra-ui/core"
import BookCard from "../BookCard"
import FullSpinner from "@/components/FullSpinner"

import useUser from "@/utils/hooks/useUser"
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

const Dashboard = ({ user }) => {

  const { user: data, isLoading, isError } = useUser(user);
  const { data: shelves } = useSWR(data ? `${apifetch}/${user.uid}/shelves` : null, fetcher)
  
  if (isLoading) {
    return <FullSpinner />;
  }

  if (isError) {
    return <h1>There was an error {isError.message}</h1>;
  }
  
  if(!data) {
    return "Loading.."
  }
  
  let u = {};
  let s = {};
  if (data && shelves) {
    u = {
      firstName: data.first_name,
      lastName: data.last_name,
      bio: data.bio
    };

    s = {
      cr: shelves.currently_reading,
      rl: shelves.want_to_read,
      pr: shelves.previously_read
    };
  }


    return data && shelves ? (
      <Box>
        <Box mb={8}>
          <Heading mb={3}>Welcome Back, {data.first_name} 👋</Heading>
          <Text>Here's what you need to know.</Text>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box w={{ md: 'lg' }} mr={{ md: 4 }} mb={{ base: 4 }}>
            <Heading fontSize="2xl" mb={3}>
              Currently
            </Heading>
            <>
              <BookCard
                portrait={true}
                id={s.cr[0].id}
                title={s.cr[0].volumeInfo.title}
                img={s.cr[0].volumeInfo.imageLinks.thumbnail}
              />
            </>
          </Box>
          <Box w="full">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Heading fontSize="2xl">Up Next</Heading>
              <Link w="max-content">Show all</Link>
            </Box>
            <Box>
              <SimpleGrid columns={2} spacing={4}>
                <Box bg="white" p={4}>
                  Book 1
                </Box>
                <Box bg="white" p={4}>
                  Book 2
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    ) : (
      'Loading'
    );
}

export default Dashboard;