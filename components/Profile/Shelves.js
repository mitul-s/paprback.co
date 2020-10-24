import { Box, Heading, Skeleton, Stack, Text, Grid } from "@chakra-ui/core"
import BookCard from "../BookCard"


const ShelfHeading = ({ title, subheading }) => (
    <Box my={5}>
      <Heading fontSize="xl">{title}</Heading>
      <Text>{subheading}</Text>
    </Box>
)

const Shelves = ({ title, subheading, shelf, portrait, ...rest }) => { 
    return (
      <Box {...rest}>
        <ShelfHeading title={title} subheading={subheading} />
        <Grid minH="20vh" gap={4} gridTemplateColumns={portrait ? ["1fr", "1fr 1fr", "repeat(4, 1fr)"] : "1fr 1fr"}>
        {shelf ? shelf.map(book => {
          return (
            <BookCard
              portrait={portrait}
              key={book.id}
              book={book}
            />
          );
        }) : (<><Skeleton minH="20vh"/><Skeleton minH="20vh"/></>)}
        </Grid>
      </Box>
    );
}

export default Shelves;