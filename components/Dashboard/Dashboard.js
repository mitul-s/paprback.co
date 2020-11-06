import { Box, Center, Heading, Link, Grid, GridItem, Spinner, Skeleton } from "@chakra-ui/core"
import BookCard from "../BookCard"
import DashCard from './DashCard';
import { AuthHeader } from "./Header";

import useUser from "@/utils/hooks/useUser"
import useShelf from '@/utils/hooks/useShelf';

import NextLink from "next/link"
import { NakedButton } from "../Shelves/Buttons";

const EmptyState = () => {
  return (
    <Center rounded="xl" p={5} textAlign="center" bg="white" h="20vh">
      You're not reading any books at the moment! Enjoy the break.
    </Center>
  )
}

const EmptyStateRL = ({ ...rest }) => {
  return (
    <Center rounded="xl" p={5} textAlign="center" bg="white" h="20vh" {...rest}>
      This is where you'll see your books to read.
    </Center>
  );
};

const Dashboard = ({ user }) => {

  const { user: data, isLoading, isError } = useUser(user);
  const { shelf: shelves = [], isLoading: isLoadingShelf } = useShelf(data);
  
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


  let s = [];
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
              {shelves && !isLoadingShelf ? (
                s.cr && s.cr.length > 0 ? (
                  <>
                    <BookCard portrait={true} book={s.cr[s.cr.length - 1]}>
                      <NakedButton
                        mt={5}
                        book={s.cr[s.cr.length - 1]}
                        shelf="previously_read"
                        text="Mark as complete"
                        fromShelf="currently_reading"
                        rounded="full"
                        // boxShadow="0px 8px 16px rgba(58,111,175,0.2)"
                      >
                        Mark as completed
                      </NakedButton>
                    </BookCard>
                  </>
                ) : (
                  <EmptyState />
                )
              ) : (
                <Skeleton h="20vh" />
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
              {s.rl ? (
                <NextLink href={`/user/${user.username}/shelves/want_to_read`}>
                  <Link w="max-content">Show all</Link>
                </NextLink>
              ) : (
                ''
              )}
            </Box>
            <Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {shelves && !isLoadingShelf ? (
                  s.rl ? (
                    <>
                      <DashCard book={s.rl[0]} />
                      <DashCard book={s.rl[1]} />
                    </>
                  ) : (
                    <GridItem colSpan={2}>
                      <EmptyStateRL />
                    </GridItem>
                  )
                ) : (
                  <>
                    <Skeleton h="20vh" />
                    <Skeleton h="20vh" />
                  </>
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Dashboard;



