import { Box, Heading, Text, Button } from "@chakra-ui/core"
import { RiArrowRightLine } from 'react-icons/ri';

const CTA = ({ ...rest }) => (
  <Box
    bg="linear-gradient(147.14deg, #3E7BFA 6.95%, #1000FF 93.05%);"
    color="white"
    px={6}
    py={8}
    rounded="xl"
    mt={10}
    display={['none', null, 'block']}
    {...rest}
  >
    <Heading fontFamily="Inter" fontSize="2xl" fontWeight="bold" mb={1}>
      Paprback
    </Heading>
    <Text fontSize="xl" mb={3}>Something about building a really cool book shelf</Text>
    <Button
      variant="link"
      color="whiteAlpha.900"
      rightIcon={<RiArrowRightLine />}
    >
      Build your shelf today
    </Button>
  </Box>
);

export default CTA;