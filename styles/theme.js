import { extendTheme } from "@chakra-ui/core";
import { mode, Styles } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.peach"
      },
    },
  },
  colors: {
    primary: {
      indigo: '#4B4DED'
    },
    brand: {
      900: 'red',
      800: '#153e75',
      700: '#2a69ac',
      peach: "#F6F5F4"
    }
  },
  fonts: {
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