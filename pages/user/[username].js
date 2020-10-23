import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import useSWR from 'swr';
import fetcher from '@/utils/fetcher'
import { apifetch } from '@/utils/fetch';
import CoreShell from '@/components/CoreShell';
import { useAuth } from '@/lib/auth';


const User = () => {
    const { user } = useAuth();
    const router = useRouter();
    const { username } = router.query;
    const { data: id } = useSWR(username ?`${apifetch}/user/${username}` : null, fetcher)
    const { data } = useSWR(id ? `${apifetch}/${id.user_id}/profile` : null, fetcher)

    if(!data) {
      <CoreShell>
        <Spinner />
      </CoreShell>
    }

    let u = {}
    if(data) {
      u = {
        firstName: data.first_name,
        lastName: data.last_name,
        bio: data.bio,
      }
    }

    return (
      <>
        <CoreShell>
          <Box
            bg="white"
            minH="20vh"
            p={5}
            display="flex"
            justifyContent="center"
            placeItems="center"
          >
            <Box textAlign="center">
              <Box mb={3}>
                <Image
                  rounded="100%"
                  border="3px solid"
                  borderColor="teal.500"
                  fallbackSrc="https://via.placeholder.com/150x150"
                />
              </Box>
                <Heading fontSize="lg">{u.firstName} {u.lastName}</Heading>
                <Heading fontSize="md" fontWeight="normal">
                  {username}
                </Heading>
                <Text>{u.bio}</Text>
            </Box>
          </Box>
        </CoreShell>
      </>
    );
}






export default User;