import { Center, Image } from "@chakra-ui/core";

export default function Cover ({ img, title, ...rest }) {
    return (
      <Center
        w="full"
        bg="white"
        p={8}
        height="max-content"
        {...rest}
      >
        <Image
          src={img}
          fallbackSrc={`https://via.placeholder.com/350x500?text=${title}`}
        />
      </Center>
    );   
}
