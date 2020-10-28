import React, { useState, useEffect } from "react";
import { Box, HStack, Button, Spinner } from "@chakra-ui/core";

import { useAuth } from "@/lib/auth";
import useUser from '@/utils/hooks/useUser';
import useShelf from '@/utils/hooks/useShelf';

export default function ShelfButtons({ id, ...rest }) {

    const { user } = useAuth();
    const { user: data, isError } = useUser(user);
    const { shelf: shelves, isLoading } = useShelf(data);

    console.log(id)
    // console.log(shelves ?  : '')
    // console.log(shelves ? shelves.currently_reading.includes(id) : '');

    const [ color, setColor ] = useState('teal');
    const [ active, setActive ] = useState(false);

    
    // console.log(shelves.currently_reading.some());

    if(isLoading) {
        return <Spinner />
    }

    // console.log(shelves ? shelves.currently_reading.some((shelf) => shelf.id === id) : shelves.want_to_read.some((shelf) => shelf.id === id) ? shelves.previously_read.some((shelf) => shelf.id === id) : '')

    // if(shelves &&  && !active) {
    //     setActive(true);
    //     setColor('blue');
    //     return;
    // }

    
        
    
    
    
    

    return (
      <HStack>
        <Button variant="solid" colorScheme={color}>Hello</Button>
        <Button variant="solid" colorScheme="teal">Hello</Button>
        <Button variant="solid" colorScheme="teal">Hello</Button>
      </HStack>
    );
}