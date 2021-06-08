import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

import theme from "./theme";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import HeaderCard from "./components/HeaderCard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Layout>
        <Flex justify="center">
          <VStack mt={{ base: "12%", md: "8%" }} textAlign="center">
            <HeaderCard />
          </VStack>

          <VStack></VStack>
        </Flex>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
