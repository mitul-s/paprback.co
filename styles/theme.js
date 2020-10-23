import { theme as chakraTheme } from "@chakra-ui/core";
export default {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    fonts: {
      ...chakraTheme.fonts,
      body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    fontWeights: {
      normal: 400,
      medium: 600,
      bold: 700,
    },
  },
};

