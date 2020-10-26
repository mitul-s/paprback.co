import { Box, Heading, Skeleton, Stack, Text, Grid } from "@chakra-ui/core"
import BookCard from "../BookCard"
import ShelfAction from '@/components/ShelfAction';


const ShelfHeading = ({ title, subheading }) => (
    <Box my={5}>
      <Heading fontSize="xl">{title}</Heading>
      <Text>{subheading}</Text>
    </Box>
)

const Shelves = ({ title, subheading, shelf, shelfType, portrait, ...rest }) => { 
  
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
      text: 'Add to currently reading',
    };
  }




    return (
      <Box {...rest}>
        <ShelfHeading title={title} subheading={subheading} />
        <Grid minH="20vh" gap={4} gridTemplateColumns={portrait ? ["1fr", "1fr 1fr", "repeat(4, 1fr)"] : "1fr 1fr"}>
        {shelf ? shelf.map(book => {
          return (
            <BookCard portrait={portrait} key={book.id} book={book}>
              {shelfType && s ? <ShelfAction
                mt={3}
                bookID={book.id}
                shelfID={s.id}
              >
                {s.text}
              </ShelfAction> : ''}
            </BookCard>
          );
        }) : (<><Skeleton minH="20vh"/><Skeleton minH="20vh"/></>)}
        </Grid>
      </Box>
    );
}

export default Shelves;