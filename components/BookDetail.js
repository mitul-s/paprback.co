import React, { useState } from 'react';
import { Box, Grid, Heading, Image, Stack, Text, Button, Collapse, Flex, Divider } from "@chakra-ui/core"
import ShelfAction from "@/components/ShelfAction";



const Description = ({ id, desc, detail = {} }) => (
  <>
    <Stack spacing={8}>
      <Stack spacing={2}>
        <Box>
          <ShelfAction
            bookID={id}
            shelfID="currently_reading"
            bg="blue.100"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z" />
              </svg>
            }
            mr={4}
          >
            Currently reading
          </ShelfAction>
          <ShelfAction
            bookID={id}
            shelfID='want_to_read'
            bg="blue.100"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z" />
              </svg>
            }
            mr={4}
          >
            Add to shelf
          </ShelfAction>
          <ShelfAction
            bg="purple.100"
            mr={4}
            bookID={id}
            shelfID='previously_read'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </ShelfAction>
        </Box>
      </Stack>
      <Box bg="white" p={5}>
        Books you might also like!
      </Box>
    </Stack>
  </>
);


export { Description };