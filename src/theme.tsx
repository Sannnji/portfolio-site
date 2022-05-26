import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  colors: { primary: "#E8E8E8" },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth"
      }
    },
    backgroundColor: "#404040",
  },
});

export default theme;
