import {
  ChakraProvider,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import theme from "./theme";
import Navbar from "./components/Navbar";
import IntroText from "./components/framer/IntroText";

import rochLogo from "./images/rochLogo.png";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Box>
        <Flex justify="center">
          <VStack pt={{ base: "25%", md: "11%" }} textAlign="center">
            <motion.img
              src={rochLogo}
              width="350px"
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />

            <IntroText />
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
