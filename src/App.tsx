import { ChakraProvider, Flex } from "@chakra-ui/react";

import theme from "./theme";

import Navbar from "./components/navbar/Navbar";
import Layout from "./components/Layout";
import HeaderCard from "./components/cards/HeaderCard";
import SkillsCard from "./components/cards/SkillsCard";
import { Footer } from "./components/footer/Footer";
import ProjectCard from "./components/cards/ProjectsCard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Layout>
        <HeaderCard />

        <Flex
          flexDirection={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          my={8}
          justify="center"
          align="center"
        >
          {/* <SkillsCard /> */}
          <ProjectCard />
        </Flex>
      </Layout>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
