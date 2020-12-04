import useShelf from "@/utils/hooks/useShelf"

import { Box, Flex, Center, Button, Heading, Text, Grid, Skeleton, Link } from "@chakra-ui/react";
import NextLink from "next/link"
import BookCard from "../BookCard";

export const ShelfHeader = ({ heading, description, shelfMap, username }) => (
    <Flex mb={5} justifyContent="space-between" alignItems="center">
    <Box>
        <Heading size="sm" textTransform="uppercase" color="gray.500" fontWeight="medium" letterSpacing="-0.3px" mb={2}>
          {heading}
        </Heading>
        <Text>{description}</Text>
    </Box>
    <Box>
      <NextLink href={`/user/${username}/shelves/${shelfMap}`}>
        <Link color="primary.indigo">Show all</Link>
      </NextLink>
    </Box>
    </Flex>
)

const EmptyShelf = ({ auth, username }) => {
  return auth ? (
    <Center h="20vh" bg="white" rounded="xl" flexDirection="column">
      <Text mb={3}>You don't have any books on this shelf</Text>
    </Center>
  ) : (
    <Center h="20vh" bg="white" rounded="xl" p={8}>
      @{username} doesn't have any books to this shelf
    </Center>
  );
}

const ShelfContainer = ({ id, shelfMap, listLength, heading, description, username, auth, ...rest }) => {

  const { shelf, isLoading } = useShelf(id);
  
    return (
      <Box {...rest}>
        <Box mb={10}>
          <ShelfHeader
            heading={heading}
            description={description}
            shelfMap={shelfMap}
            username={username}
          />
            {isLoading ? (
              <Grid gap={4} gridTemplateColumns="repeat(2, 1fr)">
                <Skeleton h="15vh" />
                <Skeleton h="15vh" />
              </Grid>
            ) : shelf && !isLoading && shelf[shelfMap] ? (
              <Grid gap={4} gridTemplateColumns={["1fr", null,`repeat(${shelf[shelfMap].books.length <= 2 ? 1 : 3}, 1fr)`]}>
              {shelf[shelfMap].books.slice(0, listLength).map((i) => {
                return (
                  <BookCard
                    book={i}
                    googlePull={false}
                    portrait={shelf[shelfMap].books.length <= 2 ? false : true}
                  />
                );
              })}
              </Grid>
            ) : (
              <EmptyShelf auth={auth} username={username}/>
            )}
        </Box>
      </Box>
    );
}

export default ShelfContainer;