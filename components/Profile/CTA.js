import { Box, Heading, Text, Button } from "@chakra-ui/react"
import { RiArrowRightLine } from 'react-icons/ri';
import { withAuthModal } from '@/components/Auth';

const CTA = ({ openAuthModal, ...rest }) => (

  <Box
    bg="linear-gradient(147.14deg, #3E7BFA 6.95%, #1000FF 93.05%);"
    color="white"
    px={6}
    py={8}
    rounded="xl"
    mt={10}
    display={['none', null, 'block']}
    onClick={openAuthModal}
    _hover={{
      cursor: "pointer"
    }}
    {...rest}
  >
    <Heading fontFamily="Inter" fontSize="2xl" fontWeight="bold" mb={1}>
      Paprback
    </Heading>
    <Text fontSize="xl" mb={3}>
      Something about building a really cool book shelf
    </Text>
    <Button
      variant="none"
      p={0}
      color="whiteAlpha.900"
      rightIcon={<RiArrowRightLine />}
    >
      Build your shelf today
    </Button>
  </Box>
);

export default withAuthModal(CTA);