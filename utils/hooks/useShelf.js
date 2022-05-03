import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

export default function useShelf(user) {
    
    const { data, error } = useSWR(user ? `${apifetch}/${user.user_id}/shelves` : null, fetcher, {
        revalidateOnFocus: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
    });

    return {
        shelf: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    }
}