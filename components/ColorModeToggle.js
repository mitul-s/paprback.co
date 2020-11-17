import { useColorMode, Button } from "@chakra-ui/react"

export default function ColorModeToggle () {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Change theme {colorMode === "light" ? "Dark" : "Light"}
        </Button>
    )
}