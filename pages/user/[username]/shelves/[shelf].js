import CoreShell from "@/components/CoreShell"
import { Heading, Center, Stack, useToast } from "@chakra-ui/core";

import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';
import useUser from '@/utils/hooks/useUser';
import useShelf from "@/utils/hooks/useShelf"
import BookCard from "@/components/BookCard";
import FullSpinner from "@/components/FullSpinner";

export default function Shelf() {

    const router = useRouter();
    const { username, shelf } = router.query;
    const { data: id, error: userError } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher)
    const { user: data } = useUser(id);
    const { shelf: shelves, error: shelfError } = useShelf(data);
  

    const toast = useToast();
    if (userError || shelfError) {
      toast({
        title: 'User or shelf not found!',
        status: 'error',
        duration: 5000,
        isClosable: 'true'
      });
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }

    if(!data || !shelves) {
      return <FullSpinner />
    }

    return (
      <>
        <CoreShell>
          <Center>
            <Heading>@{username}'s Shelf</Heading>
          </Center>
          <Stack>
            {shelves
              ? shelves[shelf].map((i) => {
                  return (
                    <>
                      <BookCard book={i} />
                    </>
                  );
                })
              : 'not working'}
          </Stack>
        </CoreShell>
      </>
    );
}