import { Box, Center, Heading, Text } from "@chakra-ui/core";

const AuthHeader = ({ name }) => (
  <Box mb={8}>
    <Heading mb={3}>Welcome back{name ? `, ${name}` : '!'} 👋</Heading>
    <Text>What would you like to read today?</Text>
  </Box>
);

const GuestHeader = () => (
  <Center mb={8} bg="white" h="35vh" p={5} flexDirection="column" rounded="xl">
    <Heading mb={3} fontSize="2xl">Welcome to Paprback 👋</Heading>
    <Text>Search for your favourite book</Text>
  </Center>
);

export { AuthHeader, GuestHeader };