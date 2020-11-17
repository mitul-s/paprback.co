import useShelf from "@/utils/hooks/useShelf"

import { Box, Heading, Text, Grid, Skeleton, } from "@chakra-ui/react";
import BookCard from "../BookCard";

export const ShelfHeader = ({ heading, description }) => (
    <Box mb={5}>
      <Heading size="sm" textTransform="uppercase" color="gray.500" fontWeight="medium" letterSpacing="-0.3px" mb={2}>
        {heading}
      </Heading>
      <Text>{description}</Text>
    </Box>
)

const ShelfContainer = ({ id, shelfMap, listLength, heading, description, ...rest }) => {

  const { shelf, isLoading } = useShelf(id);
  
    return (
      <Box {...rest}>
        <Box mb={10}>
        <ShelfHeader heading={heading} description={description} />
          <Grid gap={4}>
            {isLoading ? <Skeleton h="10vh"/> : shelf && !isLoading ? (shelf[shelfMap].slice(0,listLength).map((i) => {return <BookCard book={i} />})) : 'Empty shelf'}
          </Grid>
        </Box>
      </Box>
    );
}

export default ShelfContainer;