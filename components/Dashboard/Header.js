import { Box, Heading, Text } from "@chakra-ui/core";

const AuthHeader = ({ name }) => (
  <Box mb={8}>
    <Heading mb={3}>Welcome back{name ? `, ${name}` : '!'} 👋</Heading>
    <Text>Here's what you need to know.</Text>
  </Box>
);

const GuestHeader = () => (
  <Box mb={8} bg="white" h="35vh" p={5} display="flex"  alignItems="center" justifyContent="center" flexDirection="column">
    <Heading mb={3}>Welcome to Paprback 👋</Heading>
    <Text>Search for your favourite book</Text>
  </Box>
);

export { AuthHeader, GuestHeader };