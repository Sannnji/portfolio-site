import { Flex } from "@chakra-ui/react";

import Navbar from "./components/navbar/Navbar";
import Layout from "./components/Layout";
import HeaderCard from "./components/cards/HeaderCard";
import SkillCard from "./components/cards/SkillCard";
import ProjectCards from "./components/cards/ProjectCards";
import { LoadRest } from "./components/LoadRest";
import { SectionDivider } from "./components/SectionDivider";
import { Footer } from "./components/footer/Footer";
import { Introduction } from "./components/Introduction";

function App() {
  return (
    <>
      <Navbar />

      <Layout>
        <HeaderCard />

        <LoadRest>
          <Introduction />

          <SectionDivider sectionName="Skills" id="skills" />
          <Flex flexDirection={{ base: "column", md: "row" }} justify="center">
            <SkillCard
              favicon="fas fa-paint-brush"
              skillName="Front end"
              text1="I'm a fan of coding things from scratch, and using graphic editors like
            Photoshop XD, Figma and Framer"
              iKnow="Languages I speak"
              text2="Javascript, Typescript, CSS, HTML"
              iKnowlil="Familiar with"
              text3="Dart, Python, Java"
            />
            <SkillCard
              favicon="fas fa-database"
              skillName="Back end"
              text1="Organizing data in a easily accessible way and only quering whatt is needed"
              iKnow="Dev tools I use"
              text2="MongoDB, Postgres, Graphql, Apollo, Express, NodeJS, Redux"
              iKnowlil="Familiar with"
              text3="AWS, Heroku, Netlify"
            />
          </Flex>

          <SectionDivider sectionName="Projects" id="projects" />
          <Flex
            flexDirection={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
            my={20}
            justify="center"
            align="center"
          >
            <ProjectCards />
          </Flex>
        </LoadRest>
      </Layout>

      <Footer />
    </>
  );
}

export default App;
