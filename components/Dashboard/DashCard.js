import { Box, Flex, Heading, Button, Stack, Text, Link } from '@chakra-ui/core';
import NextLink from "next/link"
import ShelfAction from "@/components/ShelfAction";

const EmptyCard = () => {
    return (
      <Flex
        p={4}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Stack>
          <Heading fontSize="lg">No more books!</Heading>
          <Text>Let's add a book</Text>
          <Button bg="teal.200">Search</Button>
        </Stack>
      </Flex>
    );
}



const DashCard = ({ book, ...rest }) => {
    return book ? (
      <>
        <Box bg="white" p={4} minHeight="10vh" {...rest} height="20vh">
          <Stack>
            <NextLink href={`/book/${book.id}`}>
              <Link fontSize={['xl', '3xl']}>{book.volumeInfo.title}</Link>
            </NextLink>
            <Text>by {book.volumeInfo.authors}</Text>
            <ShelfAction variant="link" w="max-content" bookID={book.id} shelfID={"currently_reading"}>Add to your reading list</ShelfAction>
          </Stack>
        </Box>
      </>
    ) : (
      <EmptyCard />
    );
}

export default DashCard;