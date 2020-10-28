import { Heading, Text, Box } from "@chakra-ui/core";

export default function Titles ({ title, subtitle, authors = [], ...rest }) {
    return (
      <>
        <Box mb={3} {...rest}>
          <Heading as='h3'>{title}</Heading>
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