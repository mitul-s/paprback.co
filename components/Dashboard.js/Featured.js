import { Box, Heading, Text, Grid } from "@chakra-ui/core";

const Featured = () => {
    return (
      <Box mt={10}>
        <Box mb={4}>
          <Heading size="lg" mb={2}>The New York Times</Heading>
          <Text>Best selling books of the week</Text>
        </Box>
        <Grid gridTemplateColumns="repeat(5, 1fr)" gap={3}>
          <Box bg="white" h="100px" />
          <Box bg="white" h="100px" />
          <Box bg="white" h="100px" />
          <Box bg="white" h="100px" />
          <Box bg="white" h="100px" />
        </Grid>
      </Box>
    );
}

export default Featured;