import { Box, Text, Heading, Link, SimpleGrid, Spinner, Skeleton } from "@chakra-ui/core"
import BookCard from "../BookCard"
import { AuthHeader } from "./Header";

import useUser from "@/utils/hooks/useUser"
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

const Dashboard = ({ user }) => {

  const { user: data, isLoading, isError } = useUser(user);
  const { data: shelves } = useSWR(data ? `${apifetch}/${user.uid}/shelves` : null, fetcher)
  
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" h="30vh">
        <Spinner />
      </Box>
    );
  }

  if (isError) {
    return <h1>There was an error {isError.message}</h1>;
  }


  let s = {};
  if (shelves) {
    s = {
      cr: shelves.currently_reading,
      rl: shelves.want_to_read,
      pr: shelves.previously_read
    };
  }

    return (
      <Box>
      <AuthHeader name={data.first_name} />
        <Box display={{ md: 'flex' }}>
          <Box w={{ md: 'lg' }} mr={{ md: 4 }} mb={{ base: 4 }}>
            <Heading fontSize="2xl" mb={3}>
              Currently
            </Heading>
            <>
              {shelves ? (
                <BookCard portrait={true} book={s.cr[0]} />
              ) : (
                <Skeleton h="10vh" />
              )}
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
                {shelves ? (<><Box bg="white" p={4}>
                  Book 1
                </Box>
                <Box bg="white" p={4}>
                  Book 2
                </Box></>) : (<><Skeleton h="10vh"/><Skeleton h="10vh"/></>)}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Dashboard;