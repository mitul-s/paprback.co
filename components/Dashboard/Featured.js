import { Box, Heading, Text, Grid, Skeleton } from "@chakra-ui/react";
import useSWR from 'swr'
import { apifetch } from '@/utils/fetch'
import fetcher from '@/utils/fetcher';
import BookCard from "../BookCard";

const Featured = () => {

    const { data } = useSWR(`${apifetch}/nyt-top-ten`, fetcher, {
      revalidateOnFocus: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
      dedupingInterval: 1000000,
    });
    let b = {};
    if(data){
        b = {
        book: data.map(i => {
          if(i.google_books.items) {
            return i.google_books.items[0];
          }
        })
      }
    }


    return (
      <Box mt={10}>
        <Box mb={4}>
          <Heading size="lg" mb={2}>
            The New York Times
          </Heading>
          <Text>Best selling books of the week</Text>
        </Box>
        <Grid
          gridTemplateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(5, 1fr)'
          ]}
          gap={3}
        >
          {data && b.book ? (
            b.book
              .filter((book) => book !== undefined)
              .map((i) => {
                return (
                  <BookCard key={i.id} book={i} portrait={true} />
                );
              })
          ) : (
            <>
              <Skeleton h="20vh" />
              <Skeleton h="20vh" />
              <Skeleton h="20vh" />
              <Skeleton h="20vh" />
              <Skeleton h="20vh" />
            </>
          )}
        </Grid>
      </Box>
    );
}

export default Featured;