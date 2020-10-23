import { Box, Heading, Text, Link, SimpleGrid } from "@chakra-ui/core"
import BookCard from "../BookCard"


import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

const Dashboard = ({ user, data }) => {

  console.log(user);
  const { data: shelves } = useSWR(data ? `${apifetch}/${user.uid}/shelves` : null, fetcher)

  console.log(shelves)
  
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
    ) : 'Loading'
}

export default Dashboard;