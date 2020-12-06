import { Box, Flex } from "@chakra-ui/react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const CoreShell = ({ query, children, ...rest }) => {
    return (
      <Box>
        <Navigation query={query} />
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
