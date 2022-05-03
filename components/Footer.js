import { Box, Link, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
      <Box bg="white" w="full">
        <Box
          maxWidth="1250px"
          m="0 auto"
          h="10vh"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={20}
        >
          <Text fontSize="sm">Paprback</Text>
          <Text fontSize="sm">
            Built by{' '}
            <Link href="https://twitter.com/typicalmitul" target="_blank">
              Mitul Shah
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.linkedin.com/in/philippe-montero-16537577/"
              target="_blank"
            >
              Peej Montero
            </Link>{' '}
            👋
          </Text>
        </Box>
      </Box>
    );
}