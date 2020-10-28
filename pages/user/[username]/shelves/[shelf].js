import CoreShell from "@/components/CoreShell"
import { useToast } from "@chakra-ui/core";


import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';
import useUser from '@/utils/hooks/useUser';
import useShelf from "@/utils/hooks/useShelf"

export default function Shelf() {

    const { user } = useAuth();
    const router = useRouter();
    const { username, shelf } = router.query;
    const { data: id, error: userError } = useSWR(username ? `${apifetch}/user/${username}` : null, fetcher)
    const { user: data } = useUser(id);
    const { shelf: shelves, error: shelfError } = useShelf(data);
    
    const toast = useToast();
    if (userError ) {
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

    return (
        <>
            <CoreShell>
                This is the shelf view
            </CoreShell>
        </>
    )
}