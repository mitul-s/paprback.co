import { Box, Text, Center, Heading, Link, SimpleGrid, Spinner, Skeleton } from "@chakra-ui/core"
import BookCard from "../BookCard"
import DashCard from './DashCard';
import { AuthHeader } from "./Header";

import useUser from "@/utils/hooks/useUser"
import useShelf from '@/utils/hooks/useShelf';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';
import ShelfAction from "@/components/ShelfAction";

const Dashboard = ({ user }) => {

  const { user: data, isLoading, isError } = useUser(user);
  const { shelf: shelves } = useShelf(data);
  
  if (isLoading) {
    return (
      <Center h="30vh">
        <Spinner />
      </Center>
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
                s.cr ? (
                  <>
                    <BookCard portrait={true} book={s.cr[0]}>
                      <ShelfAction
                        mt={3}
                        bookID={s.cr[0].id}
                        shelfID={'previously_read'}
                      >
                        Mark as completed
                      </ShelfAction>
                    </BookCard>
                  </>
                ) : (
                  "You're currently reading anything!"
                )
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
                {shelves ? (
                  <>
                    <DashCard book={s.rl[0]} />
                    <DashCard book={s.rl[10]} />
                  </>
                ) : (
                  <>
                    <Skeleton h="10vh" />
                    <Skeleton h="10vh" />
                  </>
                )}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Dashboard;