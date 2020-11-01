import { Box, Flex } from "@chakra-ui/core"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const CoreShell = ({ children, ...rest }) => {
    return (
      <Box>
        <Navigation />
        <Box minH="100vh" maxW="1250px" margin="0 auto">
          <Flex
            margin="0 auto"
            direction="column"
            maxW="1250px"
            px={5}
            {...rest}
          >
            {children}
          </Flex>
        </Box>
        <Footer />
      </Box>
    );
}

export default CoreShell;
