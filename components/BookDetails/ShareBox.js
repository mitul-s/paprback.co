import { Box, Center, Text, Button, HStack } from '@chakra-ui/react';

const ShareBox = () => {
  return (
    <>
      <Center bg="white" rounded="xl" my={4} p={5}>
        <HStack>
          <Button colorScheme="facebook" disabled>
            Facebook
          </Button>
          <Button colorScheme="twitter" disabled>
            Twitter
          </Button>
        </HStack>
      </Center>
    </>
  );
};

export default ShareBox;
