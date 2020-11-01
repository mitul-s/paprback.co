import React, { useState } from "react"
import { apipost } from "@/utils/fetch";
import { useToast } from "@chakra-ui/core";

const useShelfAction = (user) => {
    
const [ loading, setLoading ] = useState(false);
const toast = useToast();
  
  
  const addToShelf = async (update) => {
    setLoading(true);
    return apipost
      .patch(`/${user.user_id}/shelves/exclusive`, update, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(() => {
        // mutate(`${apifetch}/${user.user_id}/shelves`);
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
          duration: 5000,
          isClosable: true
        });
      });
  };

  return { loading, addToShelf };
  
    
};

export default useShelfAction;