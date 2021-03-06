import React, { useState } from "react"
import { apifetch, apipost } from "@/utils/fetch";
import { useToast } from "@chakra-ui/react";
import useSWR, { mutate } from "swr";
import useShelf from '@/utils/hooks/useShelf';
import fetcher from "@/utils/fetcher";

const useShelfAction = (user) => {
    
  const [ loading, setLoading ] = useState(false);
  const toast = useToast();
  const { data = [] } = useSWR(`${apifetch}/${user.user_id}/shelves`, fetcher);

  const addToShelf = async (update, book, fromShelf) => {
    setLoading(true);
    return apipost
      .patch(`/${user.user_id}/shelves/exclusive`, update, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(() => {
        let x = data[update.to_shelf] === undefined ? [] : data[update.to_shelf].books;
        mutate(
          `${apifetch}/${user.user_id}/shelves`,
          {
            ...data,
            [update.to_shelf.books]: x.concat(book),
            [fromShelf]: fromShelf
              ? data[fromShelf].books.filter((i) => i.id !== update.volume_id)
              : ''
          },
          false
        );
        setLoading(false);
        toast({
          title: 'Complete!',
          description: 'You updated your shelf.',
          status: 'success',
          duration: 5000,
          isClosable: true
        });
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: 'Hm, there was an error',
          description: err.message,
          status: 'error',
          duration: 10000,
          isClosable: true
        });
      });
  };

  return { loading, addToShelf };
  
    
};

export default useShelfAction;