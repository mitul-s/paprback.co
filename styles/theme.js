import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: '#FAFAFC',
        color: 'black.900',
        bg: "gray.100",
      }
    }
  },
  colors: {
    primary: {
      indigo: '#4B4DED'
    },
    black: {
      900: '#1C1C28'
    },
    brand: {
      peach: '#F6F5F4'
    }
  },
  fonts: {
    // heading: 'Comfortaa',
    heading: 'Inter',
    body: 'Inter'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export default theme;