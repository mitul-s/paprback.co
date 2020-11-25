import { Box, Center, Image } from "@chakra-ui/react";

export default function Cover ({ img, title, ...rest }) {
    return (
      <Box
        // w="full"
        // p={8}
        align="center"
        py={10}
        rounded="xl"
        // bg="purple.100"
        height="max-content"
        {...rest}
      >
        <Image
          src={img}
          fallbackSrc={`https://via.placeholder.com/350x500?text=${title}`}
          shadow="xl"
          // rounded="xl"
          w="3xs"
        />
      </Box>
    );   
}
