import { Box, Heading, Skeleton, Stack, Text, Grid } from "@chakra-ui/core"
import BookCard from "../BookCard"


const ShelfHeading = ({ title, subheading }) => (
    <Box my={5}>
      <Heading fontSize="xl">{title}</Heading>
      <Text>{subheading}</Text>
    </Box>
)

const Shelves = ({ title, subheading, shelf, portrait, ...rest }) => { 
  console.log(shelf);
    return (
      <Box {...rest}>
        <ShelfHeading title={title} subheading={subheading} />
        <Grid minH="20vh" gap={4} gridTemplateColumns={portrait ? ["1fr", "1fr 1fr", "repeat(4, 1fr)"] : "1fr 1fr"}>
        {shelf ? shelf.map(item => {
            const book = {
              id: item.id,
              title: item.volumeInfo.title,
              subtitle: item.volumeInfo.subtitle,
              authors: item.volumeInfo.authors,
              ratings: {
                count: item.volumeInfo.ratingsCount,
                avg: item.volumeInfo.averageRating
              },
              img: item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : ''
            };
          return (
            <BookCard
              portrait={portrait}
              key={book.id}
              id={book.id}
              title={book.title}
              subtitle={book.subtitle}
              authors={book.authors}
              ratings={book.ratings}
              img={book.img}
            />
          );
        }) : (<><Skeleton minH="20vh"/><Skeleton minH="20vh"/></>)}
        </Grid>
      </Box>
    );
}

export default Shelves;