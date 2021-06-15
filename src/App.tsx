import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Flex,
  Text,
  VStack,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import theme from "./theme";

import Navbar from "./components/navbar/Navbar";
import Layout from "./components/Layout";
import HeaderCard from "./components/cards/HeaderCard";
import SkillsCard from "./components/cards/SkillsCard";
import { Footer } from "./components/footer/Footer";

import guiginosOne from "./images/guiginos/guiginos-one.png";
import guiginosTwo from "./images/guiginos/guiginos-two.png";
import guiginosThree from "./images/guiginos/guiginos-three.png";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Layout>
        <HeaderCard />

        <Flex flexDirection="column" my={8}>
          <SkillsCard />
        </Flex>

        {/* <SimpleGrid
            columns={{ sm: 4, md: 4 }}
            spacingX="20px"
            spacingY="20px"
            my={"2%"}
            justifyContent="center"
          >
            <GridItem colSpan={{ sm: 2, md: 2 }}>
              <HStack
                p={4}
                borderRadius={15}
                bg="#D3D7DD"
                justify="space-evenly"
              >
                <Image src={guiginosOne} width="20%" />
                <Image src={guiginosTwo} width="20%" />
                <Image src={guiginosThree} width="50%" />
              </HStack>
            </GridItem>

            <GridItem colSpan={{ sm: 2, md: 2 }}>
              <HStack
                p={4}
                borderRadius={15}
                bg="#D3D7DD"
                justify="space-evenly"
              >
                <Image src={guiginosOne} width="20%" />
                <Image src={guiginosTwo} width="20%" />
                <Image src={guiginosThree} width="50%" />
              </HStack>
            </GridItem>
          </SimpleGrid>

          <HStack>
            <SkillsCard />
            <SkillsCard />
          </HStack> */}
      </Layout>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
