import { Box, Flex, Heading, Button, Stack, Text } from '@chakra-ui/core';
import NextLink from "next/link"
import { NakedButton } from '../Shelves/Buttons';

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



const DashCard = ({ book, user, ...rest }) => {
    return book ? (
      <>
        <Box bg="white" p={4} minHeight="20vh" {...rest}>
          <Stack>
            <NextLink href={`/book/${book.id}`}>
              <Heading fontSize={['lg', 'xl']}>{book.volumeInfo.title}</Heading>
            </NextLink>
            <Text>by {book.volumeInfo.authors}</Text>
            <NakedButton
              variant="link"
              text="Mark as reading"
              w="max-content"
              book={book}
              shelf='currently_reading'
            >
              Add to your reading list
            </NakedButton>
          </Stack>
        </Box>
      </>
    ) : (
      <EmptyCard />
    );
}

export default DashCard;