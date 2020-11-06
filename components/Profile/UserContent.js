import { Box, Center, Image, Heading, Text, Wrap, WrapItem, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/core";
import { RiMapPin2Line, RiCakeLine, RiCalendarLine } from 'react-icons/ri';


const UserDetails = ({ ...rest }) => {
    return (
      <Box
        bg="white"
        rounded="xl"
        px={6}
        py={8}
        minH="10vh"
        mt={12}
        boxShadow="6px 8px 35px rgba(208,218,232,0.5)"
        {...rest}
      >
        <Box>
          <Box rounded="full" w="max-content" mb={5} mt={-24} mx="auto">
            <Image
              objectFit="cover"
              rounded="full"
              border="3px solid"
              borderColor="primary.indigo"
              fallbackSrc="https://via.placeholder.com/150x150"
            />
          </Box>
          <Box>
            <Heading as="h3" fontSize="2xl">
              Mitul Shah
            </Heading>
            <Text color="gray.600">@mitul</Text>
          </Box>
          <Box mt={4}>
            <Text fontSize="md">
              Here's a long bio that I wrote all by myself
            </Text>
          </Box>
          <Box mt={5} color="gray.500">
            <Wrap>
              <WrapItem>
                <Tag size="md" variant="ghost" p={0} fontWeight="normal">
                  <TagLeftIcon boxSize="12px" as={RiMapPin2Line} />
                  <TagLabel>Toronto</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag size="md" variant="ghost" p={0} fontWeight="normal">
                  <TagLeftIcon boxSize="12px" as={RiCakeLine} />
                  <TagLabel>September 12th</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag size="md" variant="ghost" p={0} fontWeight="normal">
                  <TagLeftIcon boxSize="12px" as={RiCalendarLine} />
                  <TagLabel>August 1st, 2020</TagLabel>
                </Tag>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Box>
    );
}

export default UserDetails;