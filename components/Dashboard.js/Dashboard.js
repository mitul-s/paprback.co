import { Box, Heading, Text, Link, SimpleGrid } from "@chakra-ui/core"
import BookCard from "../BookCard"

const Dashboard = () => {
    return (
      <Box>
        <Box display={{ md: 'flex' }}>
          <Box w={{ md: 'lg' }} mr={{ md: 4 }} mb={{ base: 4 }}>
            <Heading fontSize="2xl" mb={3}>
              Currently
            </Heading>
            <Box bg="white" p={4}>
              Insert book to read here.
            </Box>
          </Box>
          <Box w="full">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Heading fontSize="2xl">Up Next</Heading>
              <Link w="max-content">Show all</Link>
            </Box>
            <Box>
              <SimpleGrid columns={2} spacing={4}>
                <Box bg="white" p={4}>Book 1</Box>
                <Box bg="white" p={4}>Book 2</Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Dashboard;