import { Box, Heading, Center, Skeleton, Text, Grid } from "@chakra-ui/core"
import BookCard from "../BookCard"
// import ShelfAction from '@/components/ShelfAction';
import { NakedButton } from "../Shelves/Buttons";


const EmptyState = ({ username }) => {
  return (
    <Center rounded="xl" h="20vh" bg="white">
      <Text>@{username} currently doesn't have books on this shelf.</Text>
    </Center>
  );
}

const ShelfHeading = ({ title, subheading }) => (
    <Box my={5}>
      <Heading fontSize="xl">{title}</Heading>
      <Text>{subheading}</Text>
    </Box>
)

const Shelves = ({ title, subheading, shelf, user, shelfType, portrait, username, ...rest }) => { 
  
  let s = {};
  if(shelfType === 'cr') {
    s = {
      id: 'previously_read',
      text: 'Mark as complete'
    }
  }

  if (shelfType === 'pr') {
    s = {
      id: 'previously_read'
    };
  }
  
  if (shelfType === 'rl') {
    s = {
      id: 'currently_reading',
      text: 'Mark as reading',
    };
  }




    return (
      <Box {...rest}>
        <ShelfHeading title={title} subheading={subheading} />
        {shelf ? (
          <Grid
            minH="20vh"
            gap={4}
            gridTemplateColumns={
              portrait ? ['1fr', '1fr 1fr', 'repeat(4, 1fr)'] : ['1fr', null, '1fr 1fr']
            }
          >
            {shelf.map((book) => {
              return (
                <BookCard portrait={portrait} key={book.id} book={book}>
                  {shelfType && s ? (
                    <NakedButton
                      text={s.text}
                      mt={3}
                      book={book}
                      shelf={s.id}
                    />
                  ) : (
                    ''
                  )}
                </BookCard>
              );
            })}
          </Grid>
        ) : (
          <EmptyState username={username} />
        )}
      </Box>
    );
}

export default Shelves;