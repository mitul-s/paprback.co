import { Box, HStack, Heading, Text } from "@chakra-ui/core"
import BookCard from "../BookCard";

const PreviousShelf = ({ shelf }) => {
    return (
      <Box mt={10}>
      <Heading fontSize="3xl" mb={3}>Previously Read</Heading>
        <HStack overflowX="scroll" alignItems="baseline" spacing={8}>
            {shelf.map(i => {
                return <BookCard book={i} portrait={true} minW="xs" />
            })}
        </HStack>
      </Box>
    );
}

export default PreviousShelf;