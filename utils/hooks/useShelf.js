import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

export default function useShelf(user) {
    
    // const { data: id } = useSWR(user ? `${apifetch}/user/${user.username}` : null, fetcher)
    const { data, error, mutate } = useSWR(user ? `${apifetch}/${user.user_id}/shelves` : null, fetcher);

    return {
        shelf: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    }
}