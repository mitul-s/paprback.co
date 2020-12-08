import React, { useState } from "react";
import { Box, Divider, Heading, HStack, Text, Collapse, Center, Button } from "@chakra-ui/react";

const DescriptionText = ({ desc }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    return (
      <>
        <Collapse
          startingHeight={150}
          in={show}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <Button size="sm" variant="link" onClick={handleToggle} mt={3} p={0}>
          Show {show ? 'less' : 'more'}
        </Button>
      </>
    );
}

const Details = ({ detail }) => {
    return (
      <Box>
        <Heading fontSize="md" mt={3}>
          Details
        </Heading>
        <HStack>
          <Text>{detail.pages} Pages /</Text>
          <Text>Published in {detail.pubDate}</Text>
        </HStack>
      </Box>
    );
}

export default function DetailBox({ desc, detail = {}, ...rest }) {
    return (
      <Box bg="white" p={8} rounded="xl" {...rest}>
        {desc ? (
          <DescriptionText desc={desc} />
        ) : (
          <Center h={50}>We couldn't find a description for this book.</Center>
        )}
        <Divider mt={4} />
        <Details detail={detail} />
      </Box>
    );
} 