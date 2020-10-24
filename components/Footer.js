import { Box } from "@chakra-ui/core";

export default function Footer() {
    return (
        <Box bg="white" w="full">
            <Box maxWidth="1250px" m="0 auto" h="10vh" display="flex" alignItems="center" justifyContent="center" mt={20}>
                This is a footer
            </Box>
        </Box>
    )
}