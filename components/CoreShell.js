import { Box, Flex } from "@chakra-ui/core"
import Navigation from "@/components/navigation"

const CoreShell = ({ children, ...rest }) => {
    return (
      <Box minH="100vh" bg="gray.100">
        <Navigation />
        <Flex margin="0 auto" direction="column" maxW="1250px" px={8} {...rest}>
          {children}
        </Flex>
      </Box>
    );
}

export default CoreShell;
