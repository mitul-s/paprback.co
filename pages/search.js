import CoreShell from "@/components/CoreShell";
import BookCard from '@/components/BookCard';
import FullSpinner from '@/components/FullSpinner';
import { Box, Stack, Heading, SimpleGrid } from "@chakra-ui/react"

import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from "@/utils/fetcher";
import { googlefetch } from "@/utils/fetch";


const Search = () => {

    const router = useRouter();
    const { q } = router.query;
    const { data, error } = useSWR(`${googlefetch}?q=${q}`, fetcher)
    
    if (error) {
      return (
        <CoreShell>
          <h1>Hm, there was an error!</h1>
        </CoreShell>
      );
    }

    if(!q) {
        return (
          <CoreShell>
            <h1>Try a search!</h1>
          </CoreShell>
        );
    }

    if(!data) {
      return <FullSpinner />
    }

    return (
      <CoreShell>
        <Box>
        {data.totalItems === 0 ? 'Nothing found' : (<>
          <Heading size="md" mb={4} >Results for "{q}"</Heading>
          <SimpleGrid spacing={6} columns={[1, 1, 2]}>
            {data.items.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                />
              );
            })}
          </SimpleGrid>
        </>
        )}
        </Box>
      </CoreShell>
    );
}
export default Search;