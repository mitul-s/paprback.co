import { Box, Heading, Text, Grid, } from "@chakra-ui/core";
import BookCard from "../BookCard";

export const ShelfHeader = () => (
    <Box mb={5} borderLeft="2px solid black" pl={8} borderColor="purple.500">
      <Heading size="lg" mb={2} color="purple.500">
        Currently Reading
      </Heading>
      <Text>Here's a short text that describes the shelf</Text>
    </Box>
)

const ShelfContainer = ({ shelf, ...rest }) => {
    return (
      <Box {...rest}>
        <Box>
        <ShelfHeader />
          <Grid>
            {shelf.map((i) => {
              return <BookCard book={i} />;
            })}
          </Grid>
        </Box>
      </Box>
    );
}

export default ShelfContainer;