import { Box, Center, Text, Image, Heading } from "@chakra-ui/core"
import CoreShell from "@/components/CoreShell"
import Shelves from '@/components/Profile/Shelves';

const GuestProfile = ({ u, s, loading, username }) => {
    return (
      <>
        <CoreShell>
          <Center
            bg="white"
            minH="20vh"
            p={5}
          >
            <Box textAlign="center">
              <Center
                mb={3}
              >
                <Image
                  rounded="100%"
                  border="3px solid"
                  borderColor="brand.900"
                  fallbackSrc="https://via.placeholder.com/150x150"
                />
              </Center>
              <Heading fontSize="lg">
                {u.firstName} {u.lastName}
              </Heading>
              <Heading fontSize="md" fontWeight="normal">
                @{username}
              </Heading>
              <Text>{u.bio}</Text>
            </Box>
          </Center>
          <Shelves
            title="Currently"
            subheading="Books you're reading at the moment"
            shelf={s.cr}
            username={username}
          />
          <Shelves
            title="Up Next"
            subheading="Here's what's on your reading list"
            shelf={s.rl}
            username={username}
          />
          <Shelves
            title="Previously"
            subheading="Books you've read before"
            shelf={s.pr}
            portrait={true}
            username={username}
          />
        </CoreShell>
      </>
    );
}

export default GuestProfile;