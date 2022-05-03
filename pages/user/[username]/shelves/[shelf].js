// Components
import CoreShell from "@/components/CoreShell"
import BookCard from '@/components/BookCard';
import FullSpinner from '@/components/FullSpinner';

import { Heading, Center, Stack, useToast } from "@chakra-ui/react";

// Helpers
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

// Custom Hooks
import useUser from '@/utils/hooks/useUser';
import useShelf from "@/utils/hooks/useShelf"


export default function Shelf() {

    const router = useRouter();
    const { username, shelf } = router.query;
    const { data: id, error: userError } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher)
    const { user: data } = useUser(id);
    const { shelf: shelves, error: shelfError } = useShelf(data);

    // Chakra provided toast if incorrect routing, and redirection 
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
          <Center mb={5}>
            <Heading>@{username}'s Shelf</Heading>
          </Center>
          <Stack spacing={3}>
            {shelves
              ? shelves[shelf].books.map((i) => {
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