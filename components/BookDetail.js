import React, { useState } from 'react';
import { Box, Grid, Heading, Image, Stack, Text, Button, Collapse, Flex, Divider } from "@chakra-ui/core"

const Cover = ({ title, img }) => (
  <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
      flexDirection="column"
      bg="white"
      p={8}
      height="max-content"
    >
      <Image
        src={img}
        fallbackSrc={`https://via.placeholder.com/350x500?text=${title}`}
      />
    </Box>
    <Box bg="black" color="white" h="5vh" mt={4} rounded="md" p={3}>
      Share it on Twitter or Pinterest
    </Box>
  </>
);


const DescriptionText = ({ desc }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    return (
      <>
        <Collapse
          startingHeight={100}
          isOpen={show}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <Button size="sm" variant="link" onClick={handleToggle} mt={3} p={0}>
          Show {show ? 'less' : 'more'}
        </Button>
      </>
    );
}

const Description = ({ title, subtitle, authors = [], desc, detail = {} }) => (
  <>
    <Stack spacing={8}>
      <Stack spacing={2}>
        <Heading>{title}</Heading>
        <Heading fontSize="lg">{subtitle}</Heading>
        <Text fontSize="md">
          {authors.length ? 'by' : ''}{' '}
          {authors.map((a, i) => (
            <span key={i}>{(i ? ', ' : '') + a}</span>
          ))}
        </Text>
        <Box>
          <Button bg="teal.400" mr={4}>
            Add to shelf
          </Button>
          <Button bg="teal.400" mr={4}>
            Add to shelf
          </Button>
          <Button bg="teal.400" mr={4}>
            Add to shelf
          </Button>
        </Box>
      </Stack>
      <Box bg="white" p={5}>
        {desc ? <DescriptionText desc={desc} /> : <Box h={50}>No description available</Box>}
        <Box>
        <Divider mt={4}/>
        <Heading fontSize="md" my={3}>Details</Heading>
        <Flex>
            <Text mr={3}>{detail.pages} Pages /</Text>
            <Text mr={3}>{detail.lang === 'en' ? 'English' : detail.lang}</Text>
            <Text mr={3}>Published in {detail.pubDate}</Text>
        </Flex>
        </Box>
      </Box>
      <Box bg="white" p={5}>
        Books you might also like!
      </Box>
    </Stack>
  </>
);


export { Description, Cover };