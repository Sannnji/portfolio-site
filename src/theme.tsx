import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  colors: { primary: "#E8E8E8" },
  styles: {
    backgroundColor: "#404040",
  },
});

export default theme;
