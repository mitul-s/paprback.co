import CoreShell from "@/components/CoreShell";
import { Box, Spinner, Stack, Heading, SimpleGrid } from "@chakra-ui/core"

import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from "@/utils/fetcher";
import { googlefetch } from "@/utils/fetch";
import BookCard from "@/components/BookCard";

const Search = ({ children }) => {

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
        return (
          <CoreShell justifyContent="center" alignItems="center" h="80vh">
            <Spinner size="xl" />
          </CoreShell>
        );
    }

    return (
      <CoreShell>
        <Box>
        {data.totalItems === 0 ? 'Nothing found' : (<>
          <Heading size="md" mb={4} >Results for "{q}"</Heading>
          <SimpleGrid spacing={6} columns={[1, 1, 2]}>
            {data.items.map((item) => {
              console.log(item);
              const book = {
                id: item.id,
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                authors: item.volumeInfo.authors,
                ratings: {
                  count: item.volumeInfo.ratingsCount,
                  avg: item.volumeInfo.averageRating
                },
                img: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''
              };
              return (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                  ratings={book.ratings}
                  img={book.img}
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