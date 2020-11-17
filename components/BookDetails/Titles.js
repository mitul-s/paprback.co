import { Heading, Text, Stack, Tag, TagLabel, Box, IconButton} from "@chakra-ui/react";
import { RiShareCircleLine } from "react-icons/ri";

export default function Titles ({ title, subtitle, authors = [], ...rest }) {
    return (
      <>
        <Box {...rest}>
            <Tag bg="pink.100" mb={3}>
              <TagLabel>Shelf State</TagLabel>
            </Tag>
            <Heading as="h3">{title}</Heading>
            <Heading fontSize="lg">{subtitle}</Heading>
            <Text fontSize="md">
              {authors.length ? 'by' : ''}{' '}
              {authors.map((a, i) => (
                <span key={i}>{(i ? ', ' : '') + a}</span>
              ))}
            </Text>
        </Box>
      </>
    );
}