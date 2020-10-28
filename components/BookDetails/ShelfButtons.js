import React, { useState, useEffect } from "react";
import { Box, HStack, Button, Spinner, BreadcrumbLink } from "@chakra-ui/core";

import { useAuth } from "@/lib/auth";
import useUser from '@/utils/hooks/useUser';
import useShelf from '@/utils/hooks/useShelf';

import ShelfAction from "@/components/ShelfAction";

export default function ShelfButtons({ id, ...rest }) {

    const { user } = useAuth();
    const { user: data, isError } = useUser(user);
    const { shelf: shelves, isLoading } = useShelf(data);

    if(isLoading && user) {
        return <Spinner />
    }

   let btn = {
     cr: {
       text: 'Mark as reading',
       color: 'teal',
       shelfID: 'currently_reading'
     },
     rl: {
       text: 'Add to reading list',
       color: 'teal',
       shelfID: 'want_to_read'
     },
     pr: {
       text: 'Finished reading',
       color: 'teal',
       shelfID: "previously_read"
     }
   };

    const handleButtons = () => {
      switch (true) {
        case shelves.currently_reading
          ? shelves.currently_reading.some((shelf) => shelf.id === id)
          : false:
          btn.cr.text = 'Mark as complete';
          btn.cr.color = 'blue';
          break;
        case shelves.want_to_read ? shelves.want_to_read.some((shelf) => shelf.id === id) : false :
          btn.rl.text = 'Remove from list';
          btn.rl.color = 'blue';
          break;
        case shelves.previously_read ? shelves.previously_read.some((shelf) => shelf.id === id) : false :
          btn.pr.text = 'Remove from read';
          btn.pr.color = 'blue';
          break;
        default:
          break;
      }
    }
      
    if (shelves) {
      handleButtons();
    } 
    
    return (
      <HStack mb={4}>
        <ShelfAction
          variant="solid"
          colorScheme={btn.cr.color}
          bookID={id}
          shelfID={btn.cr.shelfID}
        >
          {btn.cr.text}
        </ShelfAction>
        <ShelfAction
          variant="solid"
          colorScheme={btn.rl.color}
          bookID={id}
          shelfID={btn.rl.shelfID}
        >
          {btn.rl.text}
        </ShelfAction>
        <ShelfAction
          variant="solid"
          colorScheme={btn.pr.color}
          bookID={id}
          shelfID={btn.pr.shelfID}
        >
          {btn.pr.text}
        </ShelfAction>
      </HStack>
    );
}