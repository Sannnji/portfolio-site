import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
