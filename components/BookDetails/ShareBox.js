import { Box, Center, Text, Button, HStack } from "@chakra-ui/core"

const ShareBox = () => {
    return (
      <>
        <Center bg="white" rounded="xl" my={4} p={5}>
          <HStack>
            <Button colorScheme="facebook">
              Facebook
            </Button>
            <Button colorScheme="twitter">
              Twitter
            </Button>
          </HStack>
        </Center>
      </>
    );
}

export default ShareBox;