import React, { useState } from "react"


import { Box, Button, useToast } from "@chakra-ui/core";

import { apifetch, apipost } from "@/utils/fetch"
import { useAuth } from '@/lib/auth';

import { mutate } from "swr";

import { withAuthModal } from '@/components/Auth';

const ShelfAction = ({ bookID, shelfID, children, openAuthModal, ...rest }) => {

    const { user } = useAuth();
    const toast = useToast();
    const [ loading, setLoading ] = useState(false);

    const useShelf = () => {
        if(user) {
            let data = {
                op: 'upsert',
                volume_id: bookID,
                to_shelf: shelfID
            };
            addToShelf(data)
        } else {
            setLoading(false);
            openAuthModal();
        }
    }

    const addToShelf = async (update) => {
            setLoading(true)
            return apipost
            .patch(`/${user.user_id}/shelves/exclusive`, update, {
              headers: {
                Authorization: `Bearer ${user.token}`
              }
            })
            .then(() => {
                mutate(`${apifetch}/${user.user_id}/shelves`);
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
                setLoading(false)
                toast({
                  title: 'Hm, there was an error',
                  description: err.message,
                  status: 'error',
                  duration: 5000,
                  isClosable: true
                });
            })
        } 

    return (
      <Button onClick={useShelf} isLoading={loading} {...rest}>
        {children}
      </Button>
    );
}

export default withAuthModal(ShelfAction);